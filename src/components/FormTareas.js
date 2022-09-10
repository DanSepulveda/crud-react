import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

const FormTareas = (props) => {
  const { token, tareas, setTareas } = props
  const [tarea, setTarea] = useState({})

  const handleInput = (evento) => {
    const { name, value } = evento.target

    setTarea({
      ...tarea,
      [name]: value
    })
  }

  const crearTarea = async () => {
    try {
      let respuesta = await axios.post('https://todo-app-bs.herokuapp.com/v1/task', tarea, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      if (respuesta.data.response === 'Element Created') {
        setTareas([...tareas, respuesta.data.detail])
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        text: 'Algo salió mal. Intenta más tarde'
      })
    }
  }

  return (
    <div className="div-contenedor">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        onChange={(evento) => handleInput(evento)}
      />
      <label htmlFor="description">Description</label>
      <textarea
        type="text"
        name="description"
        id="description"
        onChange={(evento) => handleInput(evento)}
      />
      <button onClick={crearTarea}>Crear tarea</button>
    </div>
  )
}

export default FormTareas
