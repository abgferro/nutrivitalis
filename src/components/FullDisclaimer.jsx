import './FullDisclaimer.css'

function FullDisclaimer() {
  return (
    <section className="full-disclaimer section">
      <div className="container">
        <div className="full-disclaimer__card">
          <div className="full-disclaimer__header">
            <span className="full-disclaimer__icon">⚠️</span>
            <h2 className="full-disclaimer__title">Aviso médico importante</h2>
          </div>
          <div className="full-disclaimer__body">
            <p>
              <strong>O NutriVitalis não substitui médico, nutricionista ou profissional de educação física.</strong>
            </p>
            <p>
              Os planos gerados pela nossa inteligência artificial têm caráter exclusivamente informativo e
              orientativo. Eles são baseados em diretrizes gerais de saúde, mas não levam em conta condições
              médicas individuais que exigem avaliação presencial.
            </p>
            <p>
              <strong>Antes de iniciar qualquer dieta ou programa de exercícios, você deve:</strong>
            </p>
            <ul>
              <li>Consultar um médico de confiança</li>
              <li>Realizar exames de rotina</li>
              <li>Informar-se sobre possíveis contraindicações</li>
              <li>Buscar orientação profissional presencial</li>
            </ul>
            <p>
              O uso da plataforma implica na aceitação dos nossos{' '}
              <a href="/termos">Termos de Uso</a> e{' '}
              <a href="/privacidade">Política de Privacidade</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FullDisclaimer