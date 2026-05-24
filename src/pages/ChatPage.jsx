import { useState } from 'react'
import DashboardNav from '../components/DashboardNav'

function ChatPage() {
  const [mensagens, setMensagens] = useState([
    { de: 'ia', texto: 'Olá! Sou sua assistente NutriVitalis. Como posso ajudar com seu plano?' },
  ])
  const [input, setInput] = useState('')

  const enviar = () => {
    if (!input.trim()) return
    setMensagens([...mensagens, { de: 'user', texto: input }])
    setInput('')
    // Simula resposta da IA
    setTimeout(() => {
      setMensagens(prev => [...prev, { de: 'ia', texto: 'Entendi! Baseado no seu plano, sugiro manter a hidratação e não pular refeições.' }])
    }, 500)
  }

  return (
    <div className="dashboard-layout">
      <div className="dashboard-sidebar"><DashboardNav /></div>
      <div className="dashboard-content chat-container">
        <h1>Mini Chat com IA</h1>
        <div className="chat-messages">
          {mensagens.map((msg, i) => (
            <div key={i} className={`chat-bubble ${msg.de}`}>{msg.texto}</div>
          ))}
        </div>
        <div className="chat-input">
          <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && enviar()} placeholder="Tire dúvidas sobre seu plano..." />
          <button onClick={enviar} className="btn btn-primary">Enviar</button>
        </div>
      </div>
    </div>
  )
}
export default ChatPage