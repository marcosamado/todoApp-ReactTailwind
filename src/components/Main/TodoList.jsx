import React from "react";
import CrossIcon from "../icons/CrossIcon";
const TodoList = ({ todos, error }) => {
    return (
        <ul>
            {todos.length === 0 && !error ? (
                <h2 className=" mb-10 mt-5 text-center text-2xl font-semibold uppercase tracking-[0.4em] text-white">
                    No hay todos
                </h2>
            ) : (
                todos.map((todo, index) => <Todo key={index} toDo={todo} />)
            )}
        </ul>
    );
};

function Todo({ toDo }) {
    const { todo } = toDo;

    return (
        <article className="flex gap-2 rounded-md border-2 border-slate-200 bg-white px-4 py-3.5">
            <button className="h-5 w-5 flex-none rounded-full border-2 border-slate-200"></button>
            <p className="grow pt-0.5 text-xs font-bold text-gray-600">
                {todo}
            </p>
            <button className="flex-none">{<CrossIcon />}</button>
        </article>
    );
}

export default TodoList;
