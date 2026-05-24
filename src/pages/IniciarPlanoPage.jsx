import { usePlanFlow } from '../hooks/usePlanFlow'
import OnboardingTour from '../components/OnboardingTour'
import PlanForm from '../components/PlanForm'
import PlanResult from '../components/PlanResult'
import CTASection from '../components/CTASection'

function IniciarPlanoPage() {
  const {
    showTour,
    currentStep,
    formData,
    planGenerated,
    isGenerating,
    steps,
    updateField,
    nextStep,
    prevStep,
    skipTour,
    finishTour,
    resetFlow,
  } = usePlanFlow()

  // Se o tour estiver ativo, mostra o tour primeiro
  if (showTour) {
    return <OnboardingTour onFinish={finishTour} onSkip={skipTour} />
  }

  // Se plano gerado, mostra resultado
  if (planGenerated) {
    return (
      <>
        <PlanResult plan={planGenerated} formData={formData} onReset={resetFlow} />
        <CTASection />
      </>
    )
  }

  // Caso contrário, mostra formulário
  return (
    <PlanForm
      currentStep={currentStep}
      formData={formData}
      steps={steps}
      updateField={updateField}
      onNext={nextStep}
      onPrev={prevStep}
      isGenerating={isGenerating}
    />
  )
}

export default IniciarPlanoPage