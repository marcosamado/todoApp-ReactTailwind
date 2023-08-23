import React from "react";
import CrossIcon from "../icons/CrossIcon";
const Todo = ({ toDo }) => {
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
};

export default Todo;
