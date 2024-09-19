import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

function TextInputForm({ handleFormSubmit, handleOnChange, inputValue, inputType, SetInputType }) {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        SetInputType(showPassword ? 'password' : 'text');
    };

    return (
        <div className="h-[583px] flex flex-col items-center justify-center bg-red-300">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Guess the Word</h1>
            <form
                className="flex flex-col items-center w-[90%] max-w-md mx-auto bg-white p-8 rounded-2xl shadow-2xl"
                onSubmit={handleFormSubmit}
            >
                <div className="w-full mb-6 relative">
                    <TextInput
                        label="Enter the word you want to guess"
                        type={inputType}
                        onChange={handleOnChange}
                        value={inputValue}
                        className="w-full border-2 border-gray-300 rounded-lg p-4 pr-12 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                    <button
                        type="button"
                        className="absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-600 focus:outline-none"
                        onClick={togglePasswordVisibility}
                    >
                    </button>
                </div>
                <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-4">
                    <Button
                        text="Start Game"
                        type="submit"
                        className="border border-green-500 rounded-xl p-2 mx-5 text-xl font-bold hover:bg-green-500 hover:text-white"

                    />
                </div>
            </form>
        </div>
    );
}

export default TextInputForm;
