import React from 'react'

function TextInput({ label, type = 'text', onchangeHandler }) {
    return (
        <div className='flex '>
            <label htmlFor="">{label}</label>
            <input className='w-full border border-black rounded-md p-2 m-2'
                type="text"
                onchange={onchangeHandler} />
        </div>
    )
}

export default TextInput