import './App.css'
import { Route, Routes } from 'react-router-dom'
import StartGame from './Pages/StartGame/StartGame'
import PlayGame from './Pages/PlayGame/PlayGame'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
function App() {

  return (
    <>
      {/* <h1 className='text-5xl text-center bg-red-300 p-3'>Hangman Using React</h1>
      <TextInputFormContainer/> */}
      <Navbar />
      <Routes>
       
        <Route path='/' element={<StartGame />} />
        <Route path='/play' element={<PlayGame />} />
        {/* <Route path='*' element={<div>Visit a valid URL</div>} /> */}
      </Routes>

      <Footer/>
    </>
  )
}

export default App
