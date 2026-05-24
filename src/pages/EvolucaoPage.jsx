import DashboardNav from '../components/DashboardNav'
import { useAuth } from '../context/AuthContext'
import PesoChart from '../components/PesoChart'
import './EvolucaoPage.css'

function EvolucaoPage() {
  const { user } = useAuth()
  const { evolucao, checkins } = user

  return (
    <div className="dashboard-layout">
      <div className="dashboard-sidebar"><DashboardNav /></div>
      <div className="dashboard-content">
        <h1>Evolução</h1>
        <div className="evolucao-resumo">
          <div className="evolucao-card">
            <h3>Peso Inicial</h3>
            <p className="big-number">{evolucao.pesoInicial} kg</p>
          </div>
          <div className="evolucao-card">
            <h3>Peso Atual</h3>
            <p className="big-number">{evolucao.pesoAtual} kg</p>
          </div>
          <div className="evolucao-card">
            <h3>Meta</h3>
            <p className="big-number">{evolucao.meta} kg</p>
          </div>
          <div className="evolucao-card">
            <h3>Dias Restantes</h3>
            <p className="big-number">{evolucao.diasRestantes}</p>
          </div>
        </div>

        <h2>Gráfico de Peso</h2>
        <PesoChart checkins={checkins} meta={evolucao.meta} />

        <div className="evolucao-comparativo">
          <h2>Antes vs Agora</h2>
          <div className="comparativo-grid">
            <div className="comparativo-card">
              <h4>Início</h4>
              <p>Peso: {evolucao.pesoInicial} kg</p>
              <p>IMC: {(evolucao.pesoInicial / ((user.altura / 100) ** 2)).toFixed(1)}</p>
            </div>
            <div className="comparativo-card">
              <h4>Atual</h4>
              <p>Peso: {evolucao.pesoAtual} kg</p>
              <p>IMC: {(evolucao.pesoAtual / ((user.altura / 100) ** 2)).toFixed(1)}</p>
            </div>
          </div>
        </div>

        <div className="evolucao-fotos">
          <h2>Fotos de Progresso (Privadas)</h2>
          <p>Funcionalidade disponível em breve.</p>
        </div>

        <div className="evolucao-relatorio">
          <h2>Relatório PDF</h2>
          <button className="btn btn-secondary">Baixar relatório completo</button>
        </div>

        <div className="evolucao-share">
          <h2>Compartilhe sua transformação!</h2>
          <div className="share-buttons">
            <button className="btn btn-secondary">📤 WhatsApp</button>
            <button className="btn btn-secondary">📸 Instagram</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EvolucaoPage