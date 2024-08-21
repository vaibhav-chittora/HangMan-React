import React, { useState } from 'react'

function TextInput({ label = 'Enter the word', type = 'text', onChange }) {


    return (
        <label htmlFor="">
            {{ label } && <span className=''> {label}</span>}
            <input className='w-[100%] border border-black rounded-md p-2 m-2'
                type={type}
                onChange={onChange}
                placeholder={label}
            />
        </label>

    )
}

export default TextInput