import { useState } from 'react'
import reactLogo from './assets/react.svg'
import tanpuraLogo from './assets/tanpura.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Sadhas Labs</h1>
      <div>
        <a href="https://vite.dev" target="_blank">
        <img src={tanpuraLogo} className="logo tanpura-logo" alt="Tanpura logo" />        </a>
      </div>
      <div className="card">
        <p>To fill in with materials</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
