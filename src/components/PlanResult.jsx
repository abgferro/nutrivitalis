import { useState } from 'react'
import './PlanResult.css'

function ShareButtons({ plan, formData }) {
  const shareText = encodeURIComponent(
    `Acabei de gerar meu plano personalizado no NutriVitalis! 🌿 Viva melhor. Evolua sempre. nutrivitalis.com`
  )
  const shareUrl = encodeURIComponent('https://nutrivitalis.com')

  return (
    <div className="share-buttons">
      <a
        href={`https://wa.me/?text=${shareText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-secondary share-btn"
      >
        📤 WhatsApp
      </a>
      <button
        className="btn btn-secondary share-btn"
        onClick={() => {
          // Simular compartilhamento no Instagram (não tem link direto, podemos abrir app ou mostrar toast)
          alert('Compartilhe no Instagram: salve a imagem ou use o link na bio!')
        }}
      >
        📸 Instagram
      </button>
      <button
        className="btn btn-secondary share-btn"
        onClick={() => {
          navigator.clipboard.writeText('https://nutrivitalis.com/meu-plano')
          alert('Link copiado!')
        }}
      >
        🔗 Copiar link
      </button>
    </div>
  )
}

function PlanResult({ plan, formData, onReset }) {
  const [showMedical, setShowMedical] = useState(true)

  return (
    <section className="plan-result-section">
      <div className="container">
        {showMedical && (
          <div className="medical-reminder">
            <span>⚠️</span>
            <p>
              <strong>Lembrete:</strong> Este plano é informativo. Consulte um profissional de saúde antes de iniciar.
            </p>
            <button onClick={() => setShowMedical(false)}>×</button>
          </div>
        )}

        <div className="plan-result-header">
          <h1 className="text-gradient">Seu plano personalizado</h1>
          <p>Baseado no seu perfil e objetivo</p>
        </div>

        <div className="plan-result-grid">
          <div className="plan-card">
            <h3>📊 Análise do Perfil</h3>
            <p>{plan.analise}</p>
            <div className="plan-stats">
              <div><strong>IMC:</strong> {plan.imc}</div>
              <div><strong>TDEE:</strong> {plan.tdee}</div>
              <div><strong>Meta calórica:</strong> {plan.metaCalorica}</div>
            </div>
          </div>

          <div className="plan-card">
            <h3>🥗 Plano Alimentar</h3>
            <div className="macro-box">{plan.macros}</div>
            <ul className="meal-list">
              {plan.planoAlimentar.map((ref, i) => (
                <li key={i}>
                  <strong>{ref.refeicao}:</strong> {ref.sugestao}
                </li>
              ))}
            </ul>
          </div>

          <div className="plan-card">
            <h3>🏋️ Ficha de Treino</h3>
            <p><strong>Frequência:</strong> {plan.treino.frequencia}</p>
            <ul>
              {plan.treino.exercicios.map((ex, i) => (
                <li key={i}>{ex}</li>
              ))}
            </ul>
          </div>

          <div className="plan-card">
            <h3>📅 Cronograma</h3>
            <p>{plan.cronograma}</p>
            <p className="mensagem-motivacional">💬 {plan.mensagem}</p>
          </div>
        </div>

        <ShareButtons plan={plan} formData={formData} />

        <div className="plan-result-footer">
          <button className="btn btn-secondary" onClick={onReset}>
            Criar novo plano
          </button>
          <button className="btn btn-primary">Salvar no meu perfil</button>
        </div>

        <div className="medical-footer">
          ⚠️ NutriVitalis não substitui médico, nutricionista ou personal trainer.
        </div>
      </div>
    </section>
  )
}

export default PlanResult