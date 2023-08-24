import React from "react";
import CrossIcon from "../icons/CrossIcon";
import CheckIcon from "../icons/CheckIcon";
const TodoList = ({ todos, error, actualizarEstado }) => {
    return (
        <ul>
            {todos.length === 0 && !error ? (
                <h2 className=" mb-10 mt-5 text-center text-2xl font-semibold uppercase tracking-[0.4em] text-white">
                    No hay todos
                </h2>
            ) : (
                todos.map((todo, index) => (
                    <Todo
                        key={index}
                        todo={todo}
                        actualizarEstado={actualizarEstado}
                    />
                ))
            )}
        </ul>
    );
};

function Todo({ todo, actualizarEstado }) {
    const { name, id, completed } = todo;

    const handleClick = () => {
        actualizarEstado(id);
    };

    const completedStyle = "";

    return (
        <article className="flex gap-2 rounded-md border-2 border-slate-200 bg-white px-4 py-3.5">
            <button
                onClick={handleClick}
                className="h-5 w-5 flex-none rounded-full border-2 border-slate-200 px-0.5"
            >
                <CheckIcon />
            </button>
            <p className="grow pt-0.5 text-xs font-bold text-gray-600">
                {name}
            </p>
            <button className="flex-none">{<CrossIcon />}</button>
        </article>
    );
}

export default TodoList;
