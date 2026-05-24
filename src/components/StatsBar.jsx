import './StatsBar.css'

const stats = [
  { number: '500+', label: 'Planos gerados', icon: '📋' },
  { number: '4+', label: 'Países atendidos', icon: '🌍' },
  { number: '4', label: 'Idiomas disponíveis', icon: '🗣️' },
  { number: '98%', label: 'Satisfação', icon: '⭐' },
]

function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="stats-bar__container">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="stats-bar__item"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <span className="stats-bar__icon">{stat.icon}</span>
            <span className="stats-bar__number">{stat.number}</span>
            <span className="stats-bar__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsBar