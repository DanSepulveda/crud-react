import axios from 'axios'

const Tarea = (props) => {
  const { title, description, _id } = props.tarea
  const { tareas, setTareas, token } = props

  const borrarTarea = async () => {
    let respuesta = await axios.delete(`https://todo-app-bs.herokuapp.com/v1/task/${_id}`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })

    const tareasResultantes = tareas.filter((tarea) => tarea._id !== _id)
    setTareas(tareasResultantes)
  }
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
      <button>Editar</button>
      <button onClick={borrarTarea}>Borrar</button>
    </div>
  )
}

export default Tarea
