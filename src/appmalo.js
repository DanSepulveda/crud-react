import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [abierto, setAbierto] = useState(0)
  const [activo, setActivo] = useState(true)
  console.log('1: estoy fuera del return')
  // codigo
  // codigo
  // codigo
  // codigo
  // codigo
  // codigo
  // codigo

  useEffect(() => {
    console.log('cambio titulo')
    document.title = 'Tienes  ' + abierto + ' notificaciones'
  }, [abierto])

  useEffect(() => {
    // fetch
    console.log('fetch')
  }, [])

  return (
    <div>
      <h1>App</h1>
      <button onClick={() => setAbierto(abierto + 1)}>Cambiar Abierto</button>
      <button onClick={() => setActivo(!activo)}>Cambiar inactivo</button>
      {console.log('3: estoy en el return')}
    </div>
  )
}

export default App

// import { useEffect } from 'react'
// import { useState } from 'react'

// function Componente1() {
//   return <div>Componente 1</div>
// }

// function Counter(props) {
//   const { contador, setContador } = props

//   useEffect(() => {
//     let intervalo = setInterval(() => {
//       setContador(contador + 1)
//     }, 1000)

//     return () => {
//       clearInterval(intervalo)
//     }
//   })

//   console.log(contador)

//   return (
//     <div>
//       <p>{contador}</p>
//     </div>
//   )
// }

// function App() {
//   const [comp, setComp] = useState(true)
//   const [contador, setContador] = useState(0)

//   return (
//     <div>
//       {comp ? (
//         <Componente1 />
//       ) : (
//         <Counter
//           contador={contador}
//           setContador={setContador}
//         />
//       )}
//       <button onClick={() => setComp(!comp)}>Cambiar</button>
//     </div>
//   )
// }

// export default App
