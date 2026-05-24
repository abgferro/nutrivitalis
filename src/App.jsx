import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import HowItWorksPage from './pages/HowItWorksPage'
import IniciarPlanoPage from './pages/IniciarPlanoPage'
import AuthPage from './pages/AuthPage'
import DashboardPage from './pages/DashboardPage'
import PlanosPage from './pages/PlanosPage'
import CheckinPage from './pages/CheckinPage'
import ConquistasPage from './pages/ConquistasPage'
import ChatPage from './pages/ChatPage'
import CalendarioPage from './pages/CalendarioPage'
import ConfiguracoesPage from './pages/ConfiguracoesPage'
import EvolucaoPage from './pages/EvolucaoPage'
import ContatoPage from './pages/ContatoPage'
import PrivacidadePage from './pages/PrivacidadePage'
import TermosPage from './pages/TermosPage'
import PrivateRoute from './components/PrivateRoute'

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('nutrivitalis-theme')
    return saved || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('nutrivitalis-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/como-funciona" element={<HowItWorksPage />} />
            <Route path="/iniciar-plano" element={<IniciarPlanoPage />} />
            <Route path="/entrar" element={<AuthPage />} />
            <Route path="/contato" element={<ContatoPage />} />
            <Route path="/privacidade" element={<PrivacidadePage />} />
            <Route path="/termos" element={<TermosPage />} />
            <Route path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
            <Route path="/planos" element={<PrivateRoute><PlanosPage /></PrivateRoute>} />
            <Route path="/checkin" element={<PrivateRoute><CheckinPage /></PrivateRoute>} />
            <Route path="/conquistas" element={<PrivateRoute><ConquistasPage /></PrivateRoute>} />
            <Route path="/chat" element={<PrivateRoute><ChatPage /></PrivateRoute>} />
            <Route path="/calendario" element={<PrivateRoute><CalendarioPage /></PrivateRoute>} />
            <Route path="/configuracoes" element={<PrivateRoute><ConfiguracoesPage /></PrivateRoute>} />
            <Route path="/evolucao" element={<PrivateRoute><EvolucaoPage /></PrivateRoute>} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
