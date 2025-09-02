import {useState} from 'react'

const MyComp1 = () => {
  const [state, setState] = useState (0)
  return (
    <>
    <h1>Счётчик: {state}</h1>
    <button onClick = {()=> setState ((state) => state + 1)}>Click me</button>
    </>
  )
}

export default MyComp1