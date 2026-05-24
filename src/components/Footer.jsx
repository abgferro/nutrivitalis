import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__brand">
          <img src="/logo-light.svg" alt="NutriVitalis" className="footer__logo" />
          <p className="footer__tagline">Viva melhor. Evolua sempre.</p>
          <div className="footer__social">
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="YouTube">▶️</a>
            <a href="#" aria-label="Twitter">🐦</a>
          </div>
        </div>

        <div className="footer__links">
          <div className="footer__col">
            <h4>Páginas</h4>
            <a href="#home">Home</a>
            <a href="#como-funciona">Como Funciona</a>
            <a href="#iniciar-plano">Iniciar Plano</a>
            <a href="#conta">Minha Conta</a>
          </div>
          <div className="footer__col">
            <h4>Legal</h4>
            <a href="/privacidade">Política de Privacidade</a>
            <a href="/termos">Termos de Uso</a>
            <a href="#contato">Contato</a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__disclaimer">
            ⚠️ NutriVitalis não substitui médico, nutricionista ou personal trainer. 
            Os planos gerados têm caráter informativo.
          </p>
          <p className="footer__copyright">
            © {year} JARS Labs — Desenvolvido com 💚 para sua evolução.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer