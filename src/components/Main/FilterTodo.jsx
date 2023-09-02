import React from "react";

const FilterTodo = ({
    setShowActiveTodo,
    setShowCompletedTodo,
    setShowAllTodo,
    showAllTodo,
    showActiveTodo,
    showCompletedTodo,
}) => {
    const handleClickAll = () => {
        setShowAllTodo(true);
        setShowActiveTodo(false);
        setShowCompletedTodo(false);
    };

    const handleClickCompleted = () => {
        setShowAllTodo(false);
        setShowActiveTodo(false);
        setShowCompletedTodo(true);
    };

    const handleClickActive = () => {
        setShowAllTodo(false);
        setShowActiveTodo(true);
        setShowCompletedTodo(false);
    };

    const onStyle = "pt-0.5 text-xs font-bold text-blue-400 ";
    const offStyle =
        "pt-0.5 text-xs font-bold text-gray-400 hover:text-blue-600";

    return (
        <section className="mt-5 flex justify-center gap-2 rounded-md border-2 border-slate-200 bg-white px-4 py-3.5 transition-all duration-500 dark:border-button-gray dark:bg-gray-todo">
            <button
                onClick={handleClickAll}
                className={showAllTodo ? onStyle : offStyle}
            >
                All
            </button>
            <button
                onClick={handleClickActive}
                className={showActiveTodo ? onStyle : offStyle}
            >
                Active
            </button>
            <button
                onClick={handleClickCompleted}
                className={showCompletedTodo ? onStyle : offStyle}
            >
                Completed
            </button>
        </section>
    );
};

export default FilterTodo;
