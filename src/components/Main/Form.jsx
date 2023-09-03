import React, { useState } from "react";

const Form = ({ agregarTodo, error, setError }) => {
    const [dataForm, setDataForm] = useState({
        name: "",
        completed: false,
    });

    const { name } = dataForm;

    const handleChange = (e) => {
        const { name, value } = e.target;
        name.length >= 3 && setError(false);
        setDataForm({ id: Date.now(), ...dataForm, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() && name.length >= 3) {
            agregarTodo(dataForm);
            setError(false);
            setDataForm({
                name: "",
                completed: false,
            });
        } else {
            setError(true);
        }
    };

    const formDarkTheme =
        "mb-5 mt-8 flex items-center gap-2 overflow-hidden rounded-md bg-white px-5 py-3.5 dark:border-button-gray dark:bg-gray-todo transition-all duration-500";
    const inputDarkTheme =
        "w-full text-gray-500 outline-none dark:bg-gray-todo dark:text-white transition-all duration-500";
    const spanDarkTheme =
        "inline-block h-5 w-5 rounded-full border-2 border-slate-200 dark:border-button-gray transition-all duration-500";
    return (
        <>
            <form className={formDarkTheme} onSubmit={handleSubmit}>
                <span className={spanDarkTheme}></span>
                <input
                    maxLength="30"
                    className={inputDarkTheme}
                    type="text"
                    placeholder="Create a new todo..."
                    name="name"
                    value={name}
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
