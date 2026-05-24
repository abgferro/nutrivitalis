import './CTASection.css'

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-section__overlay" />
      <div className="cta-section__content container">
        <h2 className="cta-section__title">
          Pronto para sua <span className="text-gradient">evolução</span>?
        </h2>
        <p className="cta-section__text">
          Comece agora gratuitamente e receba seu plano personalizado em minutos.
        </p>
        <a href="#iniciar-plano" className="btn btn-primary btn--lg">
          Começar agora — é gratuito
        </a>
      </div>
    </section>
  )
}

export default CTASection