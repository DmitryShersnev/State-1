import {useState} from 'react'

const MyComp2 = () => {
  const [state, setState] = useState (true)
  return (
    <>
    {state && <h1>Текст</h1>}
    <button onClick = {()=> setState ((state) => !state)}>Показать/Скрыть текст</button>
    </>
  )
}

export default MyComp2