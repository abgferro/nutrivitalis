function ConquistaCard({ conquista }) {
  return (
    <div className={`conquista-card ${!conquista.desbloqueada ? 'locked' : ''}`}>
      <span className="conquista-icone">{conquista.icone}</span>
      <h4>{conquista.nome}</h4>
      {!conquista.desbloqueada && <span className="lock">🔒</span>}
    </div>
  )
}
export default ConquistaCard