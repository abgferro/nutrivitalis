import './OnboardingTour.css'

const tourSteps = [
  {
    title: 'Passo 1 de 3',
    subtitle: 'Vamos conhecer você',
    description: 'Preencha informações básicas como idade, altura, peso e seu objetivo principal. Rápido e simples.',
    icon: '👤',
  },
  {
    title: 'Passo 2 de 3',
    subtitle: 'Conte sobre sua rotina',
    description: 'Compartilhe seu nível de atividade, sono e hábitos alimentares. Quanto mais soubermos, melhor o plano.',
    icon: '🏃',
  },
  {
    title: 'Passo 3 de 3',
    subtitle: 'Escolha seu caminho',
    description: 'Defina preferências alimentares, restrições e metas. A IA vai montar um plano sob medida.',
    icon: '🎯',
  },
]

function OnboardingTour({ onFinish, onSkip }) {
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    if (activeStep < tourSteps.length - 1) {
      setActiveStep(activeStep + 1)
    } else {
      onFinish()
    }
  }

  const step = tourSteps[activeStep]

  return (
    <div className="onboarding-overlay">
      <div className="onboarding-card">
        <span className="onboarding-step-indicator">{step.title}</span>
        <span className="onboarding-icon">{step.icon}</span>
        <h2 className="onboarding-title">{step.subtitle}</h2>
        <p className="onboarding-desc">{step.description}</p>

        <div className="onboarding-dots">
          {tourSteps.map((_, i) => (
            <span key={i} className={`dot ${i === activeStep ? 'active' : ''}`} />
          ))}
        </div>

        <div className="onboarding-actions">
          <button className="btn btn-ghost" onClick={onSkip}>
            Pular tour
          </button>
          <button className="btn btn-primary" onClick={handleNext}>
            {activeStep === tourSteps.length - 1 ? 'Entendi, vamos começar!' : 'Próximo'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default OnboardingTour