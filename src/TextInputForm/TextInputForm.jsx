// this is now the presentational component

import TextInput from "../TextInput/TextInput"
import Button from "../Button/Button";

function TextInputForm({ handleFormSubmit, handleOnChange, inputValue, inputType, SetInputType }) {


    return (
        <>
            <h1 className="text-3xl">Guess the word</h1>
            <form
                className="m-3 flex items-center h-[500px] w-[50%] rounded-lg"
                onSubmit={handleFormSubmit}
            >
                <div className="">
                    <TextInput
                        label="Enter the word you want to guess"
                        type={inputType}
                        onChange={handleOnChange}
                        value={inputValue}

                    />
                    <div className="flex items-center justify-center rounded-md p-2 m-2">
                        <Button
                            text='Submit'
                            type='submit'

                        />
                        <Button
                            text={inputType === 'password' ? "Show" : "Hide"}
                            onclick={() => {
                                SetInputType(inputType === 'password' ? 'text' : 'password')
                            }}
                        />
                    </div>
                </div>

            </form >
        </>
    )
}

export default TextInputForm