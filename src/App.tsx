import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {LazyComponent} from './LazyComponent.tsx';

function App() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
          <div>
              {isVisible && <LazyComponent />}
          </div>
        <button onClick={() => setIsVisible((isVisible) => !isVisible)}>
            Toggle
        </button>
      </div>
    </>
  )
}

export default App
