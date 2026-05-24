import Hero from '../components/Hero'
import MedicalDisclaimer from '../components/MedicalDisclaimer'
import StatsBar from '../components/StatsBar'
import HowItWorks from '../components/HowItWorks'
import Benefits from '../components/Benefits'
import Testimonials from '../components/Testimonials'
import CTASection from '../components/CTASection'

function HomePage() {
  return (
    <>
      <Hero />
      <MedicalDisclaimer />
      <StatsBar />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <CTASection />
    </>
  )
}

export default HomePage