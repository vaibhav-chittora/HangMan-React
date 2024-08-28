import React, { useState } from "react";
import MaskedText from "../../MaskedText/MaskedText";
import LetterButtons from "../../LetterButtons/LetterButtons";
import { useLocation } from "react-router-dom";
import Hangman from "../../Hangman/Hangman";

function PlayGame() {
  const [usedLetters, setUsedLetters] = React.useState([]);
  const [step, setStep] = useState(0);
  const [chances, setChances] = useState(9);

  const location = useLocation();
  const selectedWord = location.state?.selectedWord; // if the selectedWord is not defined, then it will be undefined , and if it is defined, then it will return the value of selectedWord
  console.log(selectedWord);

  const handleLetterClick = function (letter) {
    setUsedLetters([...usedLetters, letter]);
    // console.log(letter);
    if (selectedWord.toUpperCase().includes(letter)) {
      console.log("Correct letter", letter)

    } else {
      console.log("wrong letter", letter)
      setChances(chances - 1)
      setStep(step + 1)
    }
  };

  return (
    <div className="h-[583px] flex flex-col">
      <div className="text-2xl flex justify-center items-center">
        <h1 className="font-bold">Word : </h1>
        <MaskedText text={selectedWord} usedLetters={usedLetters} />
      </div>

      <hr />

      <div className="flex justify-between items-center m-auto">
        <div className="basis-2/4 ">
          <LetterButtons
            text={selectedWord}
            usedLetters={usedLetters}
            onLetterClick={handleLetterClick}
          />
        </div>
        <div className="flex flex-col justify-center items-center">

          <h1 className="text-2xl">Total chances you have : {chances}</h1>
          <Hangman step={step} />
          <h1 className="text-2xl">Remaining chances : {step}</h1>
        </div>

        <div>{ }</div>
      </div>
      <hr />
    </div>
  );
}

export default PlayGame;
