import React from 'react'
import MaskedText from '../../MaskedText/MaskedText'
import LetterButtons from '../../LetterButtons/LetterButtons'

function PlayGame() {
  return (
    <div>PlayGame
      <MaskedText text={'humble'} usedLetters={['b', 'e']} />
      <hr />
      <LetterButtons text={'humble'} usedLetters={['b', 'e']} />
      <hr />
    </div>
  )
}

export default PlayGame