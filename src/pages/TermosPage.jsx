import './LegalPage.css'

function TermosPage() {
  return (
    <section className="legal-page">
      <div className="container">
        <div className="page-hero">
          <span className="section__badge">Legal</span>
          <h1 className="page-hero__title">Termos de Uso</h1>
          <p className="page-hero__subtitle">Última atualização: 01 de junho de 2025</p>
        </div>

        <div className="legal-content">
          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao utilizar o NutriVitalis, você concorda com estes Termos de Uso. Se não concordar,
            não utilize a plataforma.
          </p>

          <h2>2. Descrição do Serviço</h2>
          <p>
            NutriVitalis é uma plataforma digital que utiliza inteligência artificial para gerar planos
            de dieta e treino com base nas informações fornecidas pelo usuário. O serviço é fornecido
            "como está" e possui caráter exclusivamente informativo e orientativo.
          </p>

          <h2>3. Aviso Médico Importante</h2>
          <p>
            <strong>O NutriVitalis NÃO substitui consulta com médico, nutricionista ou profissional de educação física.</strong>
          </p>
          <p>
            Os planos gerados são baseados em diretrizes gerais e não consideram condições médicas
            individuais. Antes de iniciar qualquer programa de dieta ou exercícios, você deve consultar
            um profissional de saúde qualificado.
          </p>

          <h2>4. Limitação de Responsabilidade</h2>
          <p>
            A JARS Labs não se responsabiliza por quaisquer danos, lesões ou efeitos adversos
            decorrentes do uso das informações fornecidas pela plataforma. O usuário é o único
            responsável por suas decisões de saúde.
          </p>

          <h2>5. Regras de Uso</h2>
          <p>Você concorda em:</p>
          <ul>
            <li>Fornecer informações verdadeiras e precisas</li>
            <li>Não utilizar a plataforma para fins ilícitos</li>
            <li>Não tentar violar a segurança ou engenharia reversa do sistema</li>
            <li>Respeitar os direitos de propriedade intelectual da JARS Labs</li>
          </ul>

          <h2>6. Suspensão e Encerramento</h2>
          <p>
            Reservamo-nos o direito de suspender ou encerrar contas que violem estes termos,
            a nosso critério exclusivo.
          </p>

          <h2>7. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo, design, código e marca NutriVitalis são propriedade da JARS Labs.
            É proibida a reprodução sem autorização.
          </p>

          <h2>8. Foro e Legislação</h2>
          <p>
            Estes termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o
            foro da comarca de São Paulo/SP para dirimir quaisquer dúvidas.
          </p>

          <h2>9. Contato</h2>
          <p>
            Para questões legais, entre em contato pelo e-mail: juridico@nutrivitalis.com
          </p>
        </div>
      </div>
    </section>
  )
}

export default TermosPage