import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextInputForm from './TextInputForm/TextInputForm'
import TextInputFormContainer from './TextInputForm/TextInputFormContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-5xl text-center bg-red-300 p-3'>Hangman Using React</h1>
      <TextInputFormContainer/>
    </>
  )
}

export default App
