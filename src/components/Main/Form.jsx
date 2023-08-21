import React from 'react'

const Form = () => {
    return (
        <form className="mb-5 mt-8 flex items-center gap-2 overflow-hidden rounded-md bg-white px-5 py-3.5">
                <span
                    className=" inline-block h-5 w-5 rounded-full border-2 border-slate-200">
                </span>
                <input
                    className="w-full text-gray-500 outline-none"
                    type="text"
                    placeholder="Create a new todo..." />
            </form>
    )
}

export default Form