import { NavLink } from 'react-router-dom'
import './DashboardNav.css'

const links = [
  { to: '/dashboard', label: 'Visão Geral', icon: '📊', exact: true },
  { to: '/planos', label: 'Meus Planos', icon: '📋' },
  { to: '/checkin', label: 'Check-in', icon: '✅' },
  { to: '/conquistas', label: 'Conquistas', icon: '🏆' },
  { to: '/chat', label: 'Chat IA', icon: '💬' },
  { to: '/calendario', label: 'Calendário', icon: '📅' },
  { to: '/evolucao', label: 'Evolução', icon: '📈' },
  { to: '/configuracoes', label: 'Configurações', icon: '⚙️' },
]

function DashboardNav() {
  return (
    <nav className="dashboard-nav">
      {links.map(link => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.exact}
          className={({ isActive }) => `dashboard-nav__link ${isActive ? 'active' : ''}`}
        >
          <span className="dashboard-nav__icon">{link.icon}</span>
          {link.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default DashboardNav