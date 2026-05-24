import { useEffect, useRef } from 'react'
import './Hero.css'

function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let particles = []

    // Ajustar canvas ao tamanho da tela
    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Criar partículas
    class Particle {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.5 + 0.1
        
        // Cores: dourado ou verde
        const colors = [
          '201, 168, 76',    // dourado
          '232, 201, 106',   // dourado claro
          '82, 183, 136',    // verde água
          '116, 198, 157',   // verde claro
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Bounce nas bordas
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1

        // Movimento ondulante suave
        this.x += Math.sin(Date.now() * 0.001 + this.y * 0.01) * 0.1
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`
        ctx.fill()
        
        // Brilho suave
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity * 0.2})`
        ctx.fill()
      }
    }

    // Inicializar partículas
    const particleCount = Math.min(60, Math.floor(canvas.width / 20))
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animação
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Desenhar linhas entre partículas próximas
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.1
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(201, 168, 76, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Atualizar e desenhar partículas
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="home">
      {/* Canvas para partículas */}
      <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />

      {/* Gradiente overlay */}
      <div className="hero__overlay" />

      {/* Conteúdo */}
      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Inteligência Artificial para sua saúde
        </div>

        <h1 className="hero__title">
          Transforme seu corpo,
          <br />
          <span className="hero__title-highlight">evolua sua vida</span>
        </h1>

        <p className="hero__subtitle">
          Planos de dieta e treino personalizados com IA. 
          Seu personal trainer e nutricionista digital, 
          onde você estiver, no seu idioma.
        </p>

        <div className="hero__actions">
          <button 
            className="btn btn-primary btn--lg hero__cta"
            onClick={() => scrollToSection('iniciar-plano')}
          >
            Iniciar meu plano gratuito
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
          
          <button 
            className="btn btn-secondary hero__secondary-btn"
            onClick={() => scrollToSection('como-funciona')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polygon points="10 8 16 12 10 16 10 8" fill="currentColor"/>
            </svg>
            Como funciona?
          </button>
        </div>

        {/* Indicador de scroll */}
        <div className="hero__scroll-indicator">
          <span>Role para descobrir</span>
          <div className="hero__scroll-mouse">
            <div className="hero__scroll-wheel" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero