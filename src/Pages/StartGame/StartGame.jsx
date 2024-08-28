import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TextInputFormContainer from '../../TextInputForm/TextInputFormContainer'

function StartGame() {

  const navigate = useNavigate()

  function onSubmitHandler(value) {
    //usenavigate takes 2 arguments, the first is the route you want to go to, the second is the state you want to pass to the new route
    navigate('/play', { state: { selectedWord: value } }) // navigate to the play page with the selected word as a state
    console.log("Form Submitted", value);
  }

  return (
    < >
      <div className='bg-gradient-to-r from-red-300 via-red-400 to-red-400'>

        <TextInputFormContainer onSubmit={onSubmitHandler} />

        <Link to='/play'>Link tag for play</Link>
      </div>
    </>
  )
}

export default StartGame