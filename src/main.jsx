import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UaPage from './pages/UaPage.jsx'
import './index.css'

function Root() {
  const [path, setPath] = useState(() => window.location.hash.slice(1) || '/')

  useEffect(() => {
    const onHashChange = () => setPath(window.location.hash.slice(1) || '/')
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const isUaPage = path === '/ua' || path.startsWith('/ua/')

  return isUaPage ? <UaPage /> : <App />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
