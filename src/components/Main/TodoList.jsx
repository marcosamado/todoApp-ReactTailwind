import React from "react";
import CrossIcon from "../icons/CrossIcon";
import CheckIcon from "../icons/CheckIcon";
import { Droppable, Draggable } from "@hello-pangea/dnd";

const TodoList = ({ todos, actualizarEstado, eliminarTodo }) => {
    return (
        <Droppable droppableId="todos">
            {(droppableProvided) => (
                <ul
                    ref={droppableProvided.innerRef}
                    {...droppableProvided.droppableProps}
                >
                    {todos.map((todo, index) => (
                        <Todo
                            key={index}
                            todo={todo}
                            actualizarEstado={actualizarEstado}
                            eliminarTodo={eliminarTodo}
                        />
                    ))}
                </ul>
            )}
        </Droppable>
    );
};

function Todo({ todo, actualizarEstado, eliminarTodo }) {
    const { name, id, completed } = todo;

    const handleClick = () => {
        actualizarEstado(id);
    };

    const handleClickDelete = () => {
        eliminarTodo(id);
    };

    const completedStyle =
        "h-5 w-5 flex-none rounded-full bg-gradient-to-br from-cyan-300 to-fuchsia-500 px-1";
    const incompleteStyle =
        "h-5 w-5 flex-none rounded-full border-2 border-slate-200 border-2 border-slate-200 dark:border-button-gray ";
    const crossOutText = "grow pt-0.5 text-sm text-gray-400 line-through";
    const text = "grow pt-0.5 text-sm font-bold text-gray-600 dark:text-white";

    return (
        <article className="flex gap-2 rounded-md border border-slate-300 bg-white px-4 py-3.5 transition-all duration-500 dark:border-button-gray dark:bg-gray-todo">
            <button
                onClick={handleClick}
                className={completed ? completedStyle : incompleteStyle}
            >
                {completed && <CheckIcon />}
            </button>
            <p className={completed ? crossOutText : text}>{name}</p>
            <button onClick={handleClickDelete} className="flex-none">
                {<CrossIcon />}
            </button>
        </article>
    );
}

export default TodoList;
