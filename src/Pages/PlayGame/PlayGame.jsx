import React, { useEffect, useState } from "react";
import MaskedText from "../../MaskedText/MaskedText";
import LetterButtons from "../../LetterButtons/LetterButtons";
import { useLocation, useNavigate } from "react-router-dom";
import Hangman from "../../Hangman/Hangman";

function PlayGame() {
  const [usedLetters, setUsedLetters] = useState([]);
  const [step, setStep] = useState(0);
  const [chances, setChances] = useState(10);
  const [isLoser, setIsLoser] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const selectedWord = location.state?.selectedWord?.toUpperCase();

  useEffect(() => {
    if (!selectedWord) {
      navigate("/");
    }
  }, [selectedWord]);

  useEffect(() => {
    const uniqueLetters = new Set(selectedWord);
    if (usedLetters.filter(letter => uniqueLetters.has(letter)).length === uniqueLetters.size) {
      setIsWinner(true);
    }
    if (step >= chances) {
      setIsLoser(true);
    }
  }, [usedLetters, selectedWord, step, chances]);

  const handleLetterClick = function (letter) {
    if (!usedLetters.includes(letter)) {
      setUsedLetters([...usedLetters, letter]);
      if (!selectedWord.includes(letter)) {
        setStep(prevStep => prevStep + 1);
      }
    }
  };

  function resetGameHandler() {
    setStep(0);
    setChances(10);
    setUsedLetters([]);
    setIsWinner(false);
    setIsLoser(false);
  }

  function newGameHandler() {
    navigate("/");
  }

  return (
    <div className="h-[583px] flex flex-col relative">
      <div className="text-2xl flex justify-center items-center">
        <h1 className="font-bold">Word : </h1>
        <MaskedText text={selectedWord} usedLetters={usedLetters} />
      </div>

      <hr />

      <div className="flex justify-between items-center m-auto">
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
            >
              New Game
            </button>
            <button
              className="border border-red-500 rounded-xl p-2 mx-5 text-xl font-bold hover:bg-red-500 hover:text-white"
              onClick={resetGameHandler}
            >
              Reset Game
            </button>
          </div>
        </div>
        <div className="basis-2/4 flex flex-col justify-center items-center">
          <Hangman step={step} />
          <h1 className="text-2xl">
            Wrong Guesses: {step} out of {chances}
          </h1>
        </div>
      </div>
      <hr />

      {(isWinner || isLoser) && (
        <div className="absolute inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-5 rounded-lg shadow-xl">
            <h2 className="text-xl font-bold mb-4">{isWinner ? "Congratulations!" : "Game Over"}</h2>
            <p className="mb-4">
              {isWinner ? "You won the game!" : `You lost. The word was: ${selectedWord}`}
            </p>
            <div className="flex justify-end">
              <button
                className="mr-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={newGameHandler}
              >
                New Game
              </button>
              <button
                className="px-4 py-2 bg-red-400 text-gray-800 rounded hover:bg-red-500"
                onClick={resetGameHandler}
              >
                Reset Game
              </button>
            </div>
          </div>
        </div>
      )}

     
    </div>
  );
}

export default PlayGame;
