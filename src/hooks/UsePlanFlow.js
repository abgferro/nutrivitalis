import { useState } from 'react'

export function usePlanFlow() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState({})

  const nextStep = () => setStep(prev => prev + 1)
  const prevStep = () => setStep(prev => prev - 1)
  const updateData = (newData) => setData(prev => ({ ...prev, ...newData }))

  return { step, data, nextStep, prevStep, updateData }
}

export default usePlanFlow
