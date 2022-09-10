import axios from 'axios'
import { useEffect } from 'react'
import Tarea from './Tarea'

const ListaTareas = (props) => {
  const { token, tareas, setTareas } = props

  const obtenerTareas = async () => {
    let respuesta = await axios.get('https://todo-app-bs.herokuapp.com/v1/task', {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
    })
    setTareas(respuesta.data.detail)
  }

  useEffect(() => {
    if (token) {
      obtenerTareas()
    }
  }, [token])

  return (
    <div>
      {tareas.map((tarea, index) => (
        <Tarea
          tarea={tarea}
          key={index}
          tareas={tareas}
          setTareas={setTareas}
          token={token}
        />
      ))}
    </div>
  )
}

export default ListaTareas
