import React, { useEffect, useState } from "react";

const ComputedTodo = ({ clearComplete, actualizarEstado, todos }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const newArray = todos.filter((todo) => !todo.completed);
        setCount(newArray.length);
    }, [actualizarEstado]);

    return (
        <section className="flex justify-between gap-2 rounded-md border-2 border-slate-200 bg-white px-4 py-3.5 shadow-lg transition-all duration-500 dark:border-button-gray dark:bg-gray-todo">
            <span className="pt-0.5 text-xs font-bold text-gray-300">
                {count} items left
            </span>
            <button
                onClick={clearComplete}
                className="pt-0.5 text-xs font-bold text-gray-300"
            >
                Clear Completed
            </button>
        </section>
    );
};

export default ComputedTodo;
