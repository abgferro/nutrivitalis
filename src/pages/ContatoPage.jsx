import { useState } from 'react'
import './ContatoPage.css'

function ContatoPage() {
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' })
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simular envio
    console.log('Mensagem enviada:', formData)
    setEnviado(true)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section className="contato-page">
      <div className="container">
        <div className="page-hero">
          <span className="section__badge">Fale conosco</span>
          <h1 className="page-hero__title">Contato</h1>
          <p className="page-hero__subtitle">
            Dúvidas, sugestões ou parcerias? Estamos aqui para ajudar.
          </p>
        </div>

        <div className="contato-grid">
          <div className="contato-info">
            <h2>Sobre o NutriVitalis</h2>
            <p>
              NutriVitalis é uma plataforma de saúde personalizada com inteligência artificial,
              desenvolvida pela <strong>JARS Labs</strong>. Nosso objetivo é democratizar o acesso
              a orientações de qualidade para uma vida mais saudável.
            </p>

            <h3>JARS Labs</h3>
            <p>
              Somos um laboratório de inovação focado em soluções digitais de saúde e bem-estar.
            </p>

            <h3>Redes Sociais</h3>
            <div className="contato-social">
              <a href="#" aria-label="Instagram">📷 Instagram</a>
              <a href="#" aria-label="YouTube">▶️ YouTube</a>
              <a href="#" aria-label="Twitter">🐦 Twitter</a>
            </div>

            <h3>Parcerias B2B</h3>
            <p>
              Interessado em oferecer NutriVitalis para seus clientes ou colaboradores?
              Entre em contato pelo formulário ao lado.
            </p>
          </div>

          <div className="contato-form-card">
            {enviado ? (
              <div className="contato-sucesso">
                <span>✅</span>
                <h3>Mensagem enviada!</h3>
                <p>Retornaremos em breve. Obrigado pelo contato.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contato-form">
                <div className="form-group">
                  <label htmlFor="nome">Nome</label>
                  <input id="nome" name="nome" type="text" required value={formData.nome} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="mensagem">Mensagem</label>
                  <textarea id="mensagem" name="mensagem" rows="5" required value={formData.mensagem} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary btn--lg" style={{ width: '100%' }}>
                  Enviar mensagem
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="medical-disclaimer-banner">
          ⚠️ NutriVitalis não substitui médico, nutricionista ou personal trainer.
        </div>
      </div>
    </section>
  )
}

export default ContatoPage