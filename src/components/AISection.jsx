import './AISection.css'

function AISection() {
  return (
    <section className="ai-section section">
      <div className="container">
        <div className="ai-section__grid">
          <div className="ai-section__content">
            <span className="section__badge">Tecnologia</span>
            <h2 className="section__title">
              Inteligência Artificial <span className="text-gradient">NutriVitalis</span>
            </h2>
            <p>
              Utilizamos o <strong>Claude Sonnet</strong>, um dos modelos de IA mais avançados do mundo
              (Anthropic), treinado para entender necessidades humanas complexas. Ele analisa seu
              perfil completo e gera um plano totalmente personalizado.
            </p>
            <p>
              A IA não apenas cria seu plano inicial — ela <strong>aprende e se adapta</strong> a cada
              check-in de 15 dias, ajustando dieta e treino para manter você sempre evoluindo.
            </p>
            <ul className="ai-section__features">
              <li>✅ Análise de perfil completa</li>
              <li>✅ Cálculo preciso de TDEE e macros</li>
              <li>✅ Planos adaptativos a cada check-in</li>
              <li>✅ Respostas contextuais no mini chat</li>
              <li>✅ Respeito a restrições alimentares e culturais</li>
            </ul>
          </div>
          <div className="ai-section__visual">
            <div className="ai-section__card">
              <span className="ai-section__icon">🧠</span>
              <p>"Seu plano está pronto! Analisei seu perfil e montei uma estratégia personalizada para você."</p>
              <span className="ai-section__author">— IA NutriVitalis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AISection