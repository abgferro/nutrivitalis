import DashboardNav from '../components/DashboardNav'
import { useAuth } from '../context/AuthContext'
import ConquistaCard from '../components/ConquistaCard'

function ConquistasPage() {
  const { user } = useAuth()
  return (
    <div className="dashboard-layout">
      <div className="dashboard-sidebar"><DashboardNav /></div>
      <div className="dashboard-content">
        <h1>Conquistas</h1>
        <div className="conquistas-grid">
          {user.conquistas.map(c => (
            <ConquistaCard key={c.id} conquista={c} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default ConquistasPage