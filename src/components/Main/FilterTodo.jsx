import React from "react";

const FilterTodo = ({ filterAll, filterCompleted, filterActive }) => {
    const handleClickAll = () => {
        filterAll();
    };

    const handleClickCompleted = () => {
        filterCompleted();
    };

    const handleClickActive = () => {
        filterActive();
    };

    return (
        <section className="mt-5 flex justify-center gap-2 rounded-md border-2 border-slate-200 bg-white px-4 py-3.5 dark:border-button-gray dark:bg-gray-todo">
            <button
                onClick={handleClickAll}
                className="pt-0.5 text-xs font-bold text-blue-400"
            >
                All
            </button>
            <button
                onClick={handleClickActive}
                className="pt-0.5 text-xs font-bold text-gray-400 hover:text-blue-600"
            >
                Active
            </button>
            <button
                onClick={handleClickCompleted}
                className="pt-0.5 text-xs font-bold text-gray-400 hover:text-blue-600"
            >
                Completed
            </button>
        </section>
    );
};

export default FilterTodo;
