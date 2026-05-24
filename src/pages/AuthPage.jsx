import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './AuthPage.css'

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, cadastrar } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    let success
    if (isLogin) {
      success = login(email, password)
    } else {
      success = cadastrar(nome, email, password)
    }
    if (success) navigate('/dashboard')
  }

  return (
    <section className="auth-page">
      <div className="container">
        <div className="auth-card">
          <h2>{isLogin ? 'Entrar' : 'Criar conta'}</h2>
          <p className="auth-subtitle">
            {isLogin ? 'Bem-vindo de volta!' : 'Comece sua jornada de evolução'}
          </p>

          <form onSubmit={handleSubmit} className="auth-form">
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input id="nome" type="text" value={nome} onChange={e => setNome(e.target.value)} required />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>

            <button type="submit" className="btn btn-primary btn--lg" style={{ width: '100%' }}>
              {isLogin ? 'Entrar' : 'Criar conta'}
            </button>
          </form>

          <p className="auth-toggle">
            {isLogin ? 'Ainda não tem conta?' : 'Já tem conta?'}{' '}
            <button onClick={() => setIsLogin(!isLogin)} className="link-btn">
              {isLogin ? 'Cadastre-se' : 'Faça login'}
            </button>
          </p>
        </div>
      </div>
    </section>
  )
}

export default AuthPage