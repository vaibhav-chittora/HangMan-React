import { getAllCharacters } from "../MaskedText/MaskedtextUtility";

function MaskedText({ text, usedLetters }) {
    const letters = getAllCharacters(text, usedLetters).split('');
    return (
        <div>{
            letters.map((letter,index) => {

                return <span key= {`letter-${index}`} className="mx-2 text-2xl font-bold ">{letter}</span>
            })}
            </div>
    )
}


export default MaskedText;;

// function getAllCharacters(word, usedLetters) {
//     //this function will return a string of underscores and letters that have been guessed so far

//     usedLetters = usedLetters.map((letter) => letter.toUpperCase()) // Convert usedLetters to uppercase also, ['b', 'e'] = ['B', 'E']
//     const guessedLetters = new Set(usedLetters); // create a set of guessed letters to check if a letter has been guessed or not --->{'B', 'E'}

//     const characters = word.toUpperCase().split('').map((char) => {
//         if (guessedLetters.has(char)) {
//             return char
//         }

//         return '_'
//     })

//     // word : "humble"
//     return characters.join(''); // ___B_E


// }