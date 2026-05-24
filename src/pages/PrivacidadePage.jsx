import './LegalPage.css'

function PrivacidadePage() {
  return (
    <section className="legal-page">
      <div className="container">
        <div className="page-hero">
          <span className="section__badge">Legal</span>
          <h1 className="page-hero__title">Política de Privacidade</h1>
          <p className="page-hero__subtitle">Última atualização: 01 de junho de 2025</p>
        </div>

        <div className="legal-content">
          <h2>1. Introdução</h2>
          <p>
            A JARS Labs está comprometida com a proteção dos seus dados pessoais. Esta política explica
            como coletamos, usamos, armazenamos e protegemos suas informações ao utilizar o NutriVitalis.
          </p>

          <h2>2. Dados Coletados</h2>
          <p><strong>Dados de cadastro:</strong> nome, e-mail e senha (criptografada).</p>
          <p><strong>Dados de saúde:</strong> peso, altura, idade, sexo biológico, hábitos alimentares,
          nível de atividade física, restrições alimentares, objetivos de saúde e check-ins de evolução.</p>
          <p><strong>Dados de uso:</strong> interações com a plataforma, páginas visitadas, tempo de sessão.</p>

          <h2>3. Finalidade do Tratamento</h2>
          <p>Utilizamos seus dados exclusivamente para:</p>
          <ul>
            <li>Gerar planos de dieta e treino personalizados via IA</li>
            <li>Permitir o acompanhamento da sua evolução</li>
            <li>Melhorar a plataforma e a experiência do usuário</li>
            <li>Enviar comunicações relacionadas ao serviço (nunca spam)</li>
          </ul>

          <h2>4. Compartilhamento de Dados</h2>
          <p><strong>Seus dados não são vendidos, alugados ou compartilhados com terceiros para fins comerciais.</strong></p>
          <p>Compartilhamos informações apenas com:</p>
          <ul>
            <li>Provedores de infraestrutura (Supabase, Vercel) estritamente para funcionamento técnico</li>
            <li>API da Anthropic (Claude) para processamento dos planos — sem armazenamento pela Anthropic</li>
            <li>Autoridades legais, se exigido por lei</li>
          </ul>

          <h2>5. Armazenamento e Segurança</h2>
          <p>
            Seus dados são armazenados em servidores seguros com criptografia em trânsito (HTTPS) e em repouso.
            Utilizamos o Supabase com Row Level Security (RLS) para isolar seus dados de outros usuários.
          </p>

          <h2>6. Seus Direitos (LGPD e GDPR)</h2>
          <p>Você tem direito a:</p>
          <ul>
            <li>Acessar seus dados a qualquer momento</li>
            <li>Corrigir informações incorretas</li>
            <li>Solicitar a exclusão completa da sua conta e todos os dados associados</li>
            <li>Revogar consentimento para o tratamento de dados</li>
          </ul>

          <h2>7. Exclusão de Conta</h2>
          <p>
            Para deletar sua conta e todos os dados permanentemente, acesse "Configurações" no dashboard
            e clique em "Excluir minha conta". Todos os dados serão removidos em até 30 dias.
          </p>

          <h2>8. Contato para Privacidade</h2>
          <p>
            Dúvidas sobre esta política? Entre em contato pelo e-mail: privacidade@nutrivitalis.com
            ou pelo formulário na página de Contato.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PrivacidadePage