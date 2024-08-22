import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function TextInputForm({ handleFormSubmit, handleOnChange, inputValue, inputType, SetInputType }) {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        SetInputType(showPassword ? 'password' : 'text');
    };

    return (
        <>
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Guess the Word</h1>
            <form
                className="flex flex-col justify-between items-center h-[495px] w-[80%] max-w-lg mx-auto bg-gradient-to-br from-gray-100 to-gray-300 p-8 rounded-2xl shadow-2xl"
                onSubmit={handleFormSubmit}
            >
                <div className="w-full mb-4 relative">
                    <TextInput
                        label="Enter the word you want to guess"
                        type={inputType}
                        onChange={handleOnChange}
                        value={inputValue}
                        className="w-full border-2 border-gray-400 rounded-lg p-4 pr-12 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                    <span
                        className="absolute top-1/2 transform -translate-y-1/2 right-4 flex items-center cursor-pointer text-gray-600"
                        onClick={togglePasswordVisibility}
                    >
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </span>
                </div>
                <div className="flex justify-between items-center w-full mt-6">
                    <Button
                        text="Start Game"
                        type="submit"
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out"
                    />
                    <Button
                        text={showPassword ? "Hide" : "Show"}
                        type="button"
                        className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out"
                        onclick={togglePasswordVisibility}
                    />
                </div>
            </form>
        </>
    );
}

export default TextInputForm;
