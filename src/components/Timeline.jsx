import './Timeline.css'

const steps = [
  {
    step: 1,
    title: 'Crie sua conta gratuita',
    description: 'Cadastre-se com e-mail ou redes sociais. Leva menos de 1 minuto.',
    icon: '👤',
  },
  {
    step: 2,
    title: 'Preencha seu perfil pessoal',
    description: 'Idade, sexo biológico, altura, peso atual e objetivo (emagrecer, ganhar massa, manter).',
    icon: '📝',
  },
  {
    step: 3,
    title: 'Conte sobre sua rotina',
    description: 'Nível de atividade física, horas de sono, nível de estresse e hábitos alimentares atuais.',
    icon: '🏃',
  },
  {
    step: 4,
    title: 'Defina preferências e restrições',
    description: 'Alergias, intolerâncias, alimentos que não gosta, tipo de dieta (onívora, vegana, etc.).',
    icon: '🥕',
  },
  {
    step: 5,
    title: 'Escolha seu objetivo principal',
    description: 'Emagrecimento, hipertrofia, condicionamento ou qualidade de vida. Com metas realistas.',
    icon: '🎯',
  },
  {
    step: 6,
    title: 'A IA analisa seus dados',
    description: 'O Claude Sonnet processa todas as informações com base em diretrizes de saúde e nutrição.',
    icon: '🧠',
  },
  {
    step: 7,
    title: 'Plano alimentar personalizado',
    description: 'Refeições calculadas para seu déficit/superávit calórico, com distribuição de macros.',
    icon: '🥗',
  },
  {
    step: 8,
    title: 'Ficha de treino adaptada',
    description: 'Exercícios de acordo com seu nível, disponibilidade de equipamentos e tempo.',
    icon: '🏋️',
  },
  {
    step: 9,
    title: 'Check-ins a cada 15 dias',
    description: 'Atualize peso e medidas. A IA ajusta automaticamente seu plano para manter a evolução.',
    icon: '📅',
  },
  {
    step: 10,
    title: 'Acompanhe sua evolução',
    description: 'Dashboard com gráficos, conquistas, comparativos e relatórios em PDF.',
    icon: '📈',
  },
]

function Timeline() {
  return (
    <section className="timeline section">
      <div className="container">
        <div className="section__header">
          <span className="section__badge">10 passos</span>
          <h2 className="section__title">
            Sua jornada <span className="text-gradient">completa</span>
          </h2>
        </div>

        <div className="timeline__list">
          {steps.map((item, index) => (
            <div key={index} className={`timeline__item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline__marker">
                <span className="timeline__number">{item.step}</span>
              </div>
              <div className="timeline__card">
                <span className="timeline__icon">{item.icon}</span>
                <h3 className="timeline__title">{item.title}</h3>
                <p className="timeline__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline