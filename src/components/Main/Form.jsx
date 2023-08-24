import React, { useState } from "react";

const Form = ({ agregarTodo, error, setError }) => {
    const [dataForm, setDataForm] = useState({
        todo: "",
    });

    const { todo } = dataForm;

    const handleChange = (e) => {
        const { name, value } = e.target;
        name.length >= 3 && setError(false);
        setDataForm({ ...dataForm, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.trim() && todo.length >= 3) {
            agregarTodo(dataForm);
            setError(false);
            setDataForm({
                todo: "",
            });
        } else {
            setError(true);
        }
    };

    return (
        <>
            <form
                className="mb-5 mt-8 flex items-center gap-2 overflow-hidden rounded-md  bg-white px-5 py-3.5"
                onSubmit={handleSubmit}
            >
                <span className=" inline-block h-5 w-5 rounded-full border-2 border-slate-200"></span>
                <input
                    className="w-full text-gray-500 outline-none"
                    type="text"
                    placeholder="Create a new todo..."
                    name="todo"
                    value={todo}
                    onChange={handleChange}
                />
            </form>
            {error && (
                <p className="mb-4 ml-auto mr-auto mt-5 w-max rounded bg-gradient-to-r from-rose-400 to-red-800 p-2 text-center text-sm font-semibold uppercase text-white">
                    Los datos ingresados no son validos
                </p>
            )}
        </>
    );
};

export default Form;
