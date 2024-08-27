import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";




function StartGame1() {
    
    const navigate = useNavigate()
    function handleStartGame() {
        console.log("Start Game Clicked");
        navigate('/play')
    }
    return (
        <div className="flex flex-col items-center justify-center h-[583px] bg-gradient-to-r from-purple-400 to-indigo-500 p-6">
            <h1 className="text-5xl font-bold text-center text-white mb-8">
                Wanna play Hangman - Word Guessing Game??
            </h1>
            <p className="text-xl text-center text-white mb-6">
                Hit that Start Button and let's begin!
            </p>
            {/* <form
                className="flex flex-col justify-center items-center w-full max-w-sm"
                onSubmit={handleFormSubmit}
            >
                </form> */}
            <Button
                onclick={handleStartGame}
                text="Start Game"
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-12 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out"
            />
        </div>
    );
}

export default StartGame1;
