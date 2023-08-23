import React from "react";

const ComputedTodo = () => {
    return (
        <section className="flex justify-between gap-2 rounded-md border-2 border-slate-200 bg-white px-4 py-3.5 shadow-lg">
            <span className="pt-0.5 text-xs font-bold text-gray-300">
                5 items left
            </span>
            <button className="pt-0.5 text-xs font-bold text-gray-300">
                Clear Completed
            </button>
        </section>
    );
};

export default ComputedTodo;
