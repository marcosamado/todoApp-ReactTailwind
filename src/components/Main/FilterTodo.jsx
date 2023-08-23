import React from "react";

const FilterTodo = () => {
    return (
        <section className="mt-5 flex justify-center gap-2 rounded-md border-2 border-slate-200 bg-white px-4 py-3.5">
            <button className="pt-0.5 text-xs font-bold text-blue-400">
                All
            </button>
            <button className="pt-0.5 text-xs font-bold text-gray-400 hover:text-blue-600">
                Active
            </button>
            <button className="pt-0.5 text-xs font-bold text-gray-400 hover:text-blue-600">
                Completed
            </button>
        </section>
    );
};

export default FilterTodo;
