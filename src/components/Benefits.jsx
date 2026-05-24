import './Benefits.css'

const benefits = [
  { icon: '🥗', title: 'Plano alimentar balanceado', desc: 'Refeições calculadas para seu objetivo.' },
  { icon: '🏋️', title: 'Ficha de treino progressiva', desc: 'Exercícios adaptados ao seu nível.' },
  { icon: '📊', title: 'Análise completa do IMC', desc: 'Acompanhe sua composição corporal.' },
  { icon: '🔥', title: 'Déficit calórico preciso', desc: 'Meta diária calculada com ciência.' },
  { icon: '📅', title: 'Cronograma de evolução', desc: 'Check-ins a cada 15 dias.' },
  { icon: '💬', title: 'Mini chat com IA', desc: 'Tire dúvidas sobre seu plano.' },
  { icon: '🏆', title: 'Sistema de conquistas', desc: 'Gamificação da sua jornada.' },
  { icon: '📈', title: 'Dashboard de evolução', desc: 'Gráficos e relatórios completos.' },
]

function Benefits() {
  return (
    <section className="benefits section" id="beneficios">
      <div className="container">
        <div className="section__header">
          <span className="section__badge">Tudo incluído</span>
          <h2 className="section__title">O que você <span className="text-gradient">recebe</span></h2>
          <p className="section__description">
            Ferramentas completas para transformar sua saúde de forma inteligente.
          </p>
        </div>

        <div className="benefits__grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefits__card">
              <span className="benefits__icon">{benefit.icon}</span>
              <h4 className="benefits__title">{benefit.title}</h4>
              <p className="benefits__desc">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits