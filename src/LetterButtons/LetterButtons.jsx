import React from 'react'

// const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('') 
//the above line is the same as the below line but the only difference is that above one is hard coded and below one is prettty logical using asccii values

const alphabets = new Array(26).fill('').map((element, index) => String.fromCharCode(65 + index))

function LetterButtons({ usedLetters, onLetterClick }) {

    const selectedLetters = new Set(usedLetters.join('').toUpperCase().split(''))


    const buttonStyle = function (letter) {
        if (selectedLetters.has(letter)) {
            return 'bg-blue-500 border-blue-700 hover:bg-blue-600 text-white text-xl font-bold rounded-xl'
        } else {
            return 'bg-red-500 border-red-700 hover:bg-red-600 text-white text-xl font-bold rounded-xl'

        }
    }

    function handlclick(event) {
        console.log(event.target.value);
        onLetterClick?.(character)
    }


    const buttons = alphabets.map((letter) => {
        return <button
            key={letter}
            onClick={handlclick}
            value={letter}
            disabled={selectedLetters.has(letter)}
            className={`p-3 m-2 h-16 w-16 ${buttonStyle(letter)}`}
        >
            {letter}
        </button>

    })

    return (
        <> {buttons}</>
    )
}

export default LetterButtons