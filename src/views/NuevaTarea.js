import { Fragment } from 'react'
import FormTareas from '../components/FormTareas'
import ListaTareas from '../components/ListaTareas'
import { useState } from 'react'

const NuevaTarea = (props) => {
  const { token } = props

  const [tareas, setTareas] = useState([])

  return (
    <Fragment>
      <FormTareas
        token={token}
        tareas={tareas}
        setTareas={setTareas}
      />
      <ListaTareas
        token={token}
        tareas={tareas}
        setTareas={setTareas}
      />
    </Fragment>
  )
}
export default NuevaTarea
