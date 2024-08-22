// this is the container component

import { useState } from "react";
import TextInputForm from "./TextInputForm";


function TextInputFormContainer({onSubmit }) {
    const [inputType, SetInputType] = useState('password')

    const [inputValue, setInputValue] = useState()

    function handleFormSubmit(event) {
        event.preventDefault();
        // console.log("Form Submitted", inputValue);
        onSubmit?.(inputValue)
    }

    function handleOnChange(event) {
        console.log(event.target.value);
        setInputValue(event.target.value)

    }

    return (
        // calling the presentation layer
        <TextInputForm
            inputType={inputType}
            SetInputType={SetInputType}
            inputValue={inputValue}
            handleFormSubmit={handleFormSubmit}
            handleOnChange={handleOnChange}

        />
    )
}

export default TextInputFormContainer