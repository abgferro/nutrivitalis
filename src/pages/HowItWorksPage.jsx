import Timeline from '../components/Timeline'
import AISection from '../components/AISection'
import FullDisclaimer from '../components/FullDisclaimer'
import Differentials from '../components/Differentials'
import FAQ from '../components/FAQ'
import CTASection from '../components/CTASection'

function HowItWorksPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section__badge">Passo a passo</span>
          <h1 className="page-hero__title">
            Como o <span className="text-gradient">NutriVitalis</span> funciona
          </h1>
          <p className="page-hero__subtitle">
            Da criação do perfil ao plano personalizado: veja como a inteligência
            artificial transforma suas informações em um guia completo de saúde.
          </p>
        </div>
      </section>
      <Timeline />
      <AISection />
      <FullDisclaimer />
      <Differentials />
      <FAQ />
      <CTASection />
    </>
  )
}

export default HowItWorksPage