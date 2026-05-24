import { useState, useCallback } from 'react'

const initialFormData = {
  // Perfil pessoal
  nome: '',
  idade: '',
  sexo: '',
  altura: '',
  peso: '',
  objetivo: '',
  // Rotina
  nivelAtividade: '',
  horasSono: '',
  estresse: '',
  habitosAlimentares: '',
  // Preferências
  tipoDieta: '',
  restricoes: [],
  alimentosNaoGosta: '',
  refeicoesPorDia: '4',
  // Metas
  metaPeso: '',
  prazo: '',
  disponibilidadeTreino: '',
  equipamentos: [],
}

const steps = [
  { id: 'perfil', title: 'Vamos conhecer você', fields: ['nome', 'idade', 'sexo', 'altura', 'peso', 'objetivo'] },
  { id: 'rotina', title: 'Conte sobre sua rotina', fields: ['nivelAtividade', 'horasSono', 'estresse', 'habitosAlimentares'] },
  { id: 'preferencias', title: 'Escolha seu caminho', fields: ['tipoDieta', 'restricoes', 'alimentosNaoGosta', 'refeicoesPorDia', 'metaPeso', 'prazo', 'disponibilidadeTreino', 'equipamentos'] },
]

export function usePlanFlow() {
  const [showTour, setShowTour] = useState(true) // começa com tour
  const [currentStep, setCurrentStep] = useState(0) // índice dos steps do form
  const [formData, setFormData] = useState(initialFormData)
  const [planGenerated, setPlanGenerated] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const updateField = useCallback((field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }, [])

  const nextStep = useCallback(() => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      // Finalizou formulário, gerar plano
      generatePlan()
    }
  }, [currentStep, formData])

  const prevStep = useCallback(() => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1)
  }, [currentStep])

  const skipTour = useCallback(() => {
    setShowTour(false)
  }, [])

  const finishTour = useCallback(() => {
    setShowTour(false)
  }, [])

  const generatePlan = useCallback(() => {
    setIsGenerating(true)
    // Simular chamada à IA - 2 segundos
    setTimeout(() => {
      // Mock do plano
      const mockPlan = {
        analise: `Perfil: ${formData.nome || 'Usuário'}, ${formData.idade} anos, ${formData.peso}kg, ${formData.altura}m. Objetivo: ${formData.objetivo}.`,
        imc: (formData.peso / ((formData.altura / 100) ** 2)).toFixed(1) || 'N/A',
        tdee: '2.300 kcal',
        metaCalorica: formData.objetivo === 'emagrecer' ? '1.800 kcal' : '2.500 kcal',
        macros: 'Proteínas: 150g | Carboidratos: 200g | Gorduras: 60g',
        planoAlimentar: [
          { refeicao: 'Café da manhã', sugestao: 'Ovos mexidos com aveia e frutas' },
          { refeicao: 'Almoço', sugestao: 'Frango grelhado, arroz integral e legumes' },
          { refeicao: 'Lanche', sugestao: 'Iogurte natural com granola' },
          { refeicao: 'Jantar', sugestao: 'Salmão com batata doce e brócolis' },
        ],
        treino: {
          frequencia: '4x por semana',
          exercicios: [
            'Agachamento 3x12',
            'Supino 3x10',
            'Remada curvada 3x12',
            'Prancha 3x30s',
          ],
        },
        cronograma: 'Próximo check-in em 15 dias.',
        mensagem: `${formData.nome || 'Usuário'}, seu plano foi criado com sucesso! Lembre-se de consultar um profissional.`,
      }
      setPlanGenerated(mockPlan)
      setIsGenerating(false)
    }, 2000)
  }, [formData])

  const resetFlow = useCallback(() => {
    setShowTour(true)
    setCurrentStep(0)
    setFormData(initialFormData)
    setPlanGenerated(null)
  }, [])

  return {
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
  }
}