import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

const Signup = (props) => {
  const [user, setUser] = useState({})

  const handleInput = (evento) => {
    const { value, name } = evento.target

    setUser({
      ...user,
      [name]: value
    })
  }

  const crearUsuario = async () => {
    try {
      const respuesta = await axios.post('https://todo-app-bs.herokuapp.com/v1/user/signup', user)
      let token = respuesta.data.detail.token
      props.setToken(token)
      localStorage.setItem('token', token)
    } catch (error) {
      Swal.fire({
        icon: 'error',
        text: 'Algo salió mal. Intenta más tarde'
      })
    }
  }

  return (
    <div className="div-contenedor">
      <label htmlFor="firstName">First name</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        onChange={(evento) => handleInput(evento)}
      />
      <label htmlFor="lastName">Last name</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        onChange={(evento) => handleInput(evento)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={(evento) => handleInput(evento)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={(evento) => handleInput(evento)}
      />
      <button onClick={crearUsuario}>Crear cuenta</button>
    </div>
  )
}

export default Signup
