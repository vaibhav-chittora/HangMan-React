import { useState } from "react"
import TextInput from "../TextInput/TextInput"

function TextInputForm() {
    const [inputType, SetInputType] = useState('password')

    const [inputValue, setInputValue] = useState()

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("Form Submitted", inputValue);
    }

    function handleOnChange(event) {
        console.log(event.target.value);
        setInputValue(event.target.value)
        
    }
    return (
        <>
            <h1 className="text-3xl">Guess the word</h1>
            <form
                className="m-3 flex items-center h-[500px] w-[50%] border border-black rounded-lg"
                onSubmit={handleFormSubmit}
            >
                <div className="">
                    <TextInput
                        label="Enter the word you want to guess"
                        type={inputType}
                        onChange={handleOnChange}
                        value = {inputValue}

                    />
                </div>
                <div className="flex rounded-md p-2 m-2">
                    <button
                        className="bg-green-300 m-3 px-3 rounded text-2xl cursor-pointer"
                        type="submit"
                    >
                        Submit
                    </button>
                    <button
                        className="bg-green-300 m-3 px-3 rounded text-2xl cursor-pointer"

                    >
                        Show
                    </button>
                </div>

            </form >
        </>
    )
}

export default TextInputForm