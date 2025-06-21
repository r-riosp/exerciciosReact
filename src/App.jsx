import { useState } from 'react'
import PropExample from './components/PropExample'
import Welcome from './components/Welcome'
import Auth from './components/Auth'
import Age from './components/Age'
import './App.css'

function App() {
  const [activeView, setActiveView] = useState('props')
  const [idade, setIdade] = useState()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userName, setUserName] = useState(() => {
    return prompt("Qual é o seu nome?") || "Visitante"
  })

  return (
    <>
      {/* Menu simples */}

      <nav className="menu">
        <ul>
          <li><button onClick={() => setActiveView('welcome')}>Bem-vindo!</button></li>
          <li><button onClick={() => setActiveView('props')}>Props</button></li>
          <li><button onClick={() => setActiveView('auth')}>Autenticado</button></li>
          <li><button onClick={() => setActiveView('age')}>Verificador de Idade</button></li>
        </ul>
      </nav>


      {/* Renderização condicional */}
      {activeView === 'props' && (
        <PropExample title="Exemplo de Propriedades" name={userName} />
      )}

      {activeView === 'welcome' && (
        <Welcome />
      )}

      {activeView === 'auth' && (
        <>
          <Auth autenticado={isAuthenticated} userName={userName} />
          {!isAuthenticated && (
            <button onClick={() => setIsAuthenticated(true)}>Entrar</button>
          )}
          {isAuthenticated && (
            <button onClick={() => (setIsAuthenticated(false), alert(`Tchau, ${userName}!`))}>Sair</button>
          )}
        </>
      )}

      {activeView === 'age' && (
        <>
          <Age age={idade} />
          <button onClick={() => setIdade(parseInt(prompt("Digite a sua idade:")) || '')}>
            Verificar Idade
          </button>
        </>
      )}
    </>
  )
}

export default App
