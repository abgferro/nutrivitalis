import { useAuth } from '../context/AuthContext'
import DashboardNav from '../components/DashboardNav'
import './DashboardPage.css'

function DashboardPage() {
  const { user } = useAuth()

  return (
    <section className="dashboard-layout">
      <div className="dashboard-sidebar">
        <DashboardNav />
      </div>
      <div className="dashboard-content">
        <h1>Olá, {user.nome}! 👋</h1>
        <div className="dashboard-cards">
          <div className="dash-card">
            <h3>Status do Plano</h3>
            <p>Plano ativo desde {user.planoAtivo.criadoEm}</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '40%' }} />
            </div>
            <span>Progresso estimado: 40%</span>
          </div>
          <div className="dash-card">
            <h3>Peso Atual</h3>
            <p className="big-number">{user.evolucao.pesoAtual} kg</p>
            <p>Meta: {user.evolucao.meta} kg</p>
          </div>
          <div className="dash-card">
            <h3>Próximo Check-in</h3>
            <p>{user.planoAtivo.proximoCheckin}</p>
            <button className="btn btn-primary btn--sm">Fazer check-in</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DashboardPage