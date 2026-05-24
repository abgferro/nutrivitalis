function PesoChart({ checkins, meta }) {
  if (!checkins || checkins.length === 0) return <p>Sem dados suficientes.</p>

  const width = 600, height = 200, padding = 40
  const pontos = checkins.map((c, i) => ({
    x: padding + (i / (checkins.length - 1)) * (width - 2 * padding),
    y: height - padding - ((c.peso - meta) / (checkins[0].peso - meta || 1)) * (height - 2 * padding),
    peso: c.peso,
  }))

  const pathD = pontos.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')

  return (
    <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', maxWidth: 600 }}>
      {/* Linha da meta */}
      <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="var(--accent-gold)" strokeDasharray="4" />
      <text x={width - padding} y={height - padding - 5} fontSize="10" fill="var(--accent-gold)">Meta {meta}kg</text>

      {/* Linha de peso */}
      <path d={pathD} fill="none" stroke="var(--accent-green-light)" strokeWidth="2" />
      {pontos.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="4" fill="var(--accent-green)" />
      ))}
    </svg>
  )
}

export default PesoChart