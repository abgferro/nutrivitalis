import './HowItWorks.css'

const steps = [
  {
    number: '01',
    icon: '📋',
    title: 'Preencha seu perfil',
    description: 'Conte sobre você, seus objetivos, rotina e preferências alimentares. Leva apenas 5 minutos.',
  },
  {
    number: '02',
    icon: '🤖',
    title: 'A IA analisa seus dados',
    description: 'Nossa inteligência artificial processa suas informações e cria um plano totalmente personalizado.',
  },
  {
    number: '03',
    icon: '🎯',
    title: 'Receba seu plano',
    description: 'Tenha em mãos um plano alimentar, ficha de treino e cronograma de evolução.',
  },
]

function HowItWorks() {
  return (
    <section className="how-it-works section" id="como-funciona">
      <div className="container">
        <div className="section__header">
          <span className="section__badge">Simples assim</span>
          <h2 className="section__title">Como o <span className="text-gradient">NutriVitalis</span> funciona</h2>
          <p className="section__description">
            Três passos simples para transformar sua saúde com o poder da inteligência artificial.
          </p>
        </div>

        <div className="how-it-works__grid">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="how-it-works__card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="how-it-works__card-number">{step.number}</div>
              <div className="how-it-works__card-icon">{step.icon}</div>
              <h3 className="how-it-works__card-title">{step.title}</h3>
              <p className="how-it-works__card-text">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="how-it-works__connector" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks