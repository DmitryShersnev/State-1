import {useState} from 'react'

const MyComp4 = () => {
  const [state, setState] = useState ('red')
  const style = {
    color: state
  }
  return (
    <>
    <h1 style = {style}>Текст</h1>
    <button onClick = {()=> setState(state === 'red' ? 'green' : 'red')}>Сменить цвет текста</button>
    </>
  )
}
export default MyComp4