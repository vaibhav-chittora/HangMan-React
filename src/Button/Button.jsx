import React from 'react'

function Button({text, type,onclick}) {
    return (
        <button
            // className='bg-green-300 m-3 px-3 rounded text-2xl cursor-pointer'
            className="border border-green-500 rounded-xl p-2 mx-5 text-xl font-bold hover:bg-green-500 hover:text-white"
            type={type}
            onClick={onclick}
        >{text}</button>
    )
}

export default Button