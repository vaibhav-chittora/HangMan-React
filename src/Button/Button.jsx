import React from 'react'

function Button({text, type,onclick}) {
    return (
        <button
            className='bg-green-300 m-3 px-3 rounded text-2xl cursor-pointer'
            type={type}
            onClick={onclick}
        >{text}</button>
    )
}

export default Button