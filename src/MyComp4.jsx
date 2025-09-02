import {useState} from 'react'

const MyComp4 = () => {
  const [state, setState] = useState ('red')
  const style = {
    color: state
  }
  return (
    <>
    <p style = {style}>Текст</p>
    <button onClick = {()=> setState(state === 'red' ? 'green' : 'red')}>Сменить цвет текста</button>
    </>
  )
}

export default MyComp4