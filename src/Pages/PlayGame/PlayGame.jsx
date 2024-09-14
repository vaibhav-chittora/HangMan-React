import React, { useEffect, useState } from "react";
import MaskedText from "../../MaskedText/MaskedText";
import LetterButtons from "../../LetterButtons/LetterButtons";
import { useLocation } from "react-router-dom";
import Hangman from "../../Hangman/Hangman";
import { useNavigate } from "react-router-dom";

function PlayGame() {
  const [usedLetters, setUsedLetters] = React.useState([]);
  const [step, setStep] = useState(0);
  const [chances, setChances] = useState(10);
  const [winner, setWinner] = useState(false);
  const [loser, setLoser] = useState(false);

  const navigate = useNavigate();


  const location = useLocation();

  // if the selectedWord is not defined, then it will be undefined , and if it is defined, then it will return the value of selectedWord
  const selectedWord = location.state?.selectedWord;

  useEffect(() => {
    if (selectedWord.length === 0) {
      setWinner(true)
      return (
        <h1>You won!!!!!!!</h1>
      )
    }
  }, [selectedWord])

  const handleLetterClick = function (letter) {
    setUsedLetters([...usedLetters, letter]);
    if (selectedWord.includes(letter)) {
      setStep(step + 1)
    } else {
      setChances(chances - 1)
    }

  };

  //reset the game
  function resetGameHandler() {
    setStep(0)
    setChances(10)
    setUsedLetters([])
  }
  //start a new game
  function newGameHandler() {
    navigate("/")
  }

  return (
    <div className="h-[583px] flex flex-col ">
      <div className="text-2xl flex justify-center items-center">
        <h1 className="font-bold">Word : </h1>
        <MaskedText text={selectedWord} usedLetters={usedLetters} />
      </div>

      <hr />

      <div className="flex justify-between items-center m-auto">
        {/* STEP - {step} , Chances - {chances} */}
        <div className="basis-2/4 mx-20 flex flex-col justify-center items-center"> 
          <div className="mb-5">
            <LetterButtons
              text={selectedWord}
              usedLetters={usedLetters}
              onLetterClick={handleLetterClick}
            />
          </div>
          <div className="">

            <button
              className="border border-green-500 rounded-xl p-2 mx-5 text-xl font-bold hover:bg-green-500 hover:text-white"
              onClick={newGameHandler}
            >New Game
            </button>
            <button
              className="border border-red-500 rounded-xl p-2 mx-5 text-xl font-bold hover:bg-red-500 hover:text-white"
              onClick={resetGameHandler}
            >Reset Game
            </button>
          </div>
        </div>
        <div className="basis-2/4 flex flex-col justify-center items-center">


          <h1 className="text-2xl">Total lives - 10</h1>
          <Hangman step={step} />
          <h1 className="text-2xl">
            {/* remaining chances */}
            Remaining : {chances - step} </h1>
        </div>

      </div>
      <hr />

    </div>
  );
}

export default PlayGame;
