import './Testimonials.css'

const testimonials = [
  {
    name: 'Ana Silva',
    result: 'Perdeu 8kg em 3 meses',
    text: '"O plano era tão simples de seguir que virou rotina. A IA realmente entendeu minhas dificuldades."',
    avatar: '👩‍🦰',
  },
  {
    name: 'Carlos Oliveira',
    result: 'Ganhou 5kg de massa magra',
    text: '"Finalmente uma ferramenta que junta dieta e treino de forma inteligente. Recomendo demais!"',
    avatar: '👨‍🦱',
  },
  {
    name: 'Maria Santos',
    result: 'Melhorou qualidade de vida',
    text: '"Aos 58 anos, achei que não conseguiria mudar. O NutriVitalis me mostrou que é possível."',
    avatar: '👩‍🦳',
  },
]

function Testimonials() {
  return (
    <section className="testimonials section" id="depoimentos">
      <div className="container">
        <div className="section__header">
          <span className="section__badge">Depoimentos</span>
          <h2 className="section__title">Quem já <span className="text-gradient">transformou</span> a vida</h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonials__card">
              <div className="testimonials__avatar">{t.avatar}</div>
              <p className="testimonials__text">"{t.text}"</p>
              <div className="testimonials__author">
                <strong>{t.name}</strong>
                <span>{t.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials