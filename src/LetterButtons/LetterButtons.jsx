import React from 'react'

// const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('') 
//the above line is the same as the below line but the only difference is that above one is hard coded and below one is prettty logical using asccii values

const alphabets = new Array(26).fill('').map((element, index) => String.fromCharCode(65 + index))

function LetterButtons({ text, usedLetters, onLetterClick }) {

    const originalLetters = new Set(text.toUpperCase().split(''))
    const selectedLetters = new Set(usedLetters.join('').toUpperCase().split(''))


    const buttonStyle = function (letter) {
        if (selectedLetters.has(letter)) {
            // return `bg-green-500 border-green-700 hover:bg-green-600 text-white text-xl font-bold rounded-xl`
            return `bg-red-500 border-red-700 rounded-xl font-bold text-white ${originalLetters.has(letter) ? 'bg-green-500 border-red-700 font-bold' : 'bg-red-900 disabled border-red-700 font-bold'}`
            
        }
        else {
                // return `bg-green-500 border-green-700 hover:bg-green-600 text-white text-xl font-bold rounded-xl`
                return `bg-red-300 border-red-500 rounded-xl font-bold text-white ${originalLetters.has(letter) ? 'bg-red-500 border-red-700 font-bold' : 'bg-red-500 border-red-700 font-bold'}`
        }
    }
    function handlclick(event) {
        console.log(event.target.value);
        const character = event.target.value
        onLetterClick?.(character)

    }


    const buttons = alphabets.map((letter) => {
        return <button
            text={text}
            key={letter}
            onClick={handlclick}
            value={letter}
            disabled={selectedLetters.has(letter)}
            className={`p-3 m-2 h-16 w-16 ${ buttonStyle(letter) } `}
        >
            {letter}
        </button>

    })

    return (
        <> {buttons}</>
    )
}

export default LetterButtons