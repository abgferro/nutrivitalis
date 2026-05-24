import './MedicalDisclaimer.css'

function MedicalDisclaimer() {
  return (
    <section className="medical-disclaimer">
      <div className="medical-disclaimer__container">
        <div className="medical-disclaimer__icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        </div>
        <p className="medical-disclaimer__text">
          <strong>NutriVitalis é uma ferramenta de orientação.</strong> Não substitui consulta com médico, nutricionista ou profissional de educação física. 
          Os planos gerados por IA têm caráter informativo. Consulte um profissional antes de iniciar qualquer programa.
        </p>
        <a href="#como-funciona" className="medical-disclaimer__link">
          Saiba mais
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      </div>
    </section>
  )
}

export default MedicalDisclaimer