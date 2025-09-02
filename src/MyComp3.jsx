import {useState} from 'react'

const MyComp3 = () => {
  const [state, setState] = useState ('')
  return (
    <>
    <input type='text' value = {state} onChange={(event) => setState(event.target.value)}></input>
    <h1>State: {state}</h1>
    </>
  )
}

export default MyComp3