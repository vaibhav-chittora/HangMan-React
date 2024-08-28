import React from 'react'
import MaskedText from '../../MaskedText/MaskedText'
import LetterButtons from '../../LetterButtons/LetterButtons'
import { useLocation } from 'react-router-dom'

function PlayGame() {
  const [usedLetters, setUsedLetters] = React.useState([])

  const location = useLocation()
  const selectedWord = location.state?.selectedWord // if the selectedWord is not defined, then it will be undefined , and if it is defined, then it will return the value of selectedWord
  console.log(selectedWord);

  const handleLetterClick = function (letter) {
    setUsedLetters([...usedLetters, letter])
    // console.log(letter);
  }


  return (
    <div>PlayGame
      <MaskedText text={selectedWord} usedLetters={usedLetters} />
      <hr />
      <LetterButtons text={selectedWord} usedLetters={usedLetters} onLetterClick={handleLetterClick} />
      <hr />
    </div>
  )
}

export default PlayGame