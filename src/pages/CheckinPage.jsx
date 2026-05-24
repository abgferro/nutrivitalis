import { useState } from 'react'
import DashboardNav from '../components/DashboardNav'
import { useAuth } from '../context/AuthContext'

function CheckinPage() {
  const { user, updateUser } = useAuth()
  const [peso, setPeso] = useState(user.evolucao.pesoAtual)
  const [medidas, setMedidas] = useState('')

  const handleCheckin = (e) => {
    e.preventDefault()
    updateUser({
      evolucao: {
        ...user.evolucao,
        pesoAtual: parseFloat(peso),
        checkins: [...user.checkins, { data: new Date().toISOString().slice(0, 10), peso: parseFloat(peso) }]
      }
    })
    alert('Check-in realizado com sucesso!')
  }

  return (
    <div className="dashboard-layout">
      <div className="dashboard-sidebar"><DashboardNav /></div>
      <div className="dashboard-content">
        <h1>Check-in (15/15 dias)</h1>
        <form onSubmit={handleCheckin}>
          <div className="form-group">
            <label>Peso atual (kg)</label>
            <input type="number" step="0.1" value={peso} onChange={e => setPeso(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Medidas (opcional)</label>
            <textarea value={medidas} onChange={e => setMedidas(e.target.value)} placeholder="Cintura, quadril, etc." />
          </div>
          <button type="submit" className="btn btn-primary">Registrar Check-in</button>
        </form>
      </div>
    </div>
  )
}

export default CheckinPage