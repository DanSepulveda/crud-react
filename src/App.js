import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Signup from './views/Signup'
import { useState } from 'react'
import NuevaTarea from './views/NuevaTarea'
import { useEffect } from 'react'

const App = () => {
  const [token, setToken] = useState(null)

  useEffect(() => {
    let tokenLS = localStorage.getItem('token')
    setToken(tokenLS)
  }, [])

  return (
    <Routes>
      <Route
        path="/signup"
        element={<Signup setToken={setToken} />}
      />
      <Route
        path="/nueva-tarea"
        element={<NuevaTarea token={token} />}
      />
    </Routes>
  )
}

export default App
