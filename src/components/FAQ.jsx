import { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    q: 'O NutriVitalis é gratuito?',
    a: 'Sim! Você pode gerar seu plano e acompanhar sua evolução gratuitamente. Futuramente teremos planos premium com funcionalidades extras, mas o essencial sempre será gratuito.',
  },
  {
    q: 'Preciso criar uma conta?',
    a: 'Sim, a conta é necessária para salvar seu perfil, planos e histórico de evolução. Seus dados ficam seguros e você pode deletá-los a qualquer momento.',
  },
  {
    q: 'A IA substitui um nutricionista ou personal?',
    a: 'Não. A IA oferece orientações baseadas em diretrizes gerais. Ela não substitui uma consulta presencial com profissional de saúde. Sempre recomendamos acompanhamento profissional.',
  },
  {
    q: 'Como funciona o check-in de 15 dias?',
    a: 'A cada 15 dias, você insere seu peso e medidas atuais. A IA recalcula seu plano automaticamente, ajustando calorias e treinos para manter a evolução constante.',
  },
  {
    q: 'Posso mudar meu plano depois de gerado?',
    a: 'Sim! Você pode refazer o questionário a qualquer momento para atualizar preferências, objetivo ou rotina. Um novo plano será gerado instantaneamente.',
  },
  {
    q: 'Funciona no celular?',
    a: 'Sim, o NutriVitalis é um PWA (Progressive Web App). Pode ser instalado na tela inicial do seu celular e usado como um aplicativo nativo, inclusive offline.',
  },
  {
    q: 'Em quais idiomas está disponível?',
    a: 'Atualmente em Português (Brasil e Portugal), Inglês e Espanhol. A IA gera os planos no idioma que você escolher.',
  },
  {
    q: 'Meus dados estão seguros?',
    a: 'Sim. Utilizamos criptografia, autenticação segura e armazenamento em banco de dados com isolamento por usuário (RLS). Em conformidade com LGPD e GDPR.',
  },
  {
    q: 'Posso deletar minha conta?',
    a: 'Sim. Nas configurações da sua conta, há a opção de excluir permanentemente todos os seus dados. Nenhuma informação será mantida após a exclusão.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="section__header">
          <span className="section__badge">Dúvidas</span>
          <h2 className="section__title">Perguntas <span className="text-gradient">frequentes</span></h2>
        </div>

        <div className="faq__list">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`faq__item ${openIndex === index ? 'open' : ''}`}
            >
              <button
                className="faq__question"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.q}</span>
                <svg
                  className="faq__arrow"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className="faq__answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ