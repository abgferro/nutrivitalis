import { createContext, useContext, useState, useCallback } from 'react'

const AuthContext = createContext()

const mockUser = {
  nome: 'Maria Silva',
  email: 'maria@email.com',
  peso: 72,
  altura: 165,
  objetivo: 'emagrecer',
  planoAtivo: {
    criadoEm: '2025-06-01',
    metaCalorica: '1800 kcal',
    treino: '4x/semana',
    proximoCheckin: '2025-06-15',
  },
  conquistas: [
    { id: 1, nome: 'Primeiro plano', icone: '🎉', desbloqueada: true },
    { id: 2, nome: '7 dias seguidos', icone: '🔥', desbloqueada: true },
    { id: 3, nome: 'Primeiro check-in', icone: '📅', desbloqueada: false },
    { id: 4, nome: 'Perdeu 5kg', icone: '⚡', desbloqueada: false },
    { id: 5, nome: '10 treinos', icone: '💪', desbloqueada: false },
  ],
  checkins: [
    { data: '2025-06-01', peso: 72 },
    { data: '2025-06-15', peso: 70.5 },
  ],
  evolucao: {
    pesoInicial: 72,
    pesoAtual: 70.5,
    meta: 62,
    diasRestantes: 75,
  },
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = useCallback((email, password) => {
    // Simula login
    if (email && password) {
      setUser(mockUser)
      setIsAuthenticated(true)
      return true
    }
    return false
  }, [])

  const cadastrar = useCallback((nome, email, password) => {
    if (nome && email && password) {
      setUser({ ...mockUser, nome, email })
      setIsAuthenticated(true)
      return true
    }
    return false
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    setIsAuthenticated(false)
  }, [])

  const updateUser = useCallback((updates) => {
    setUser(prev => ({ ...prev, ...updates }))
  }, [])

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, cadastrar, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)