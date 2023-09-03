import React, { useEffect, useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import ComputedTodo from "./ComputedTodo";
import FilterTodo from "./FilterTodo";

const Main = () => {
    const [todos, setTodos] = useState([]);
    // const [completedTodo, setCompletedTodo] = useState([]);
    // const [activeTodo, setActiveTodo] = useState([]);
    const [error, setError] = useState(false);

    const [showCompletedTodo, setShowCompletedTodo] = useState(false);
    const [showActiveTodo, setShowActiveTodo] = useState(false);
    const [showAllTodo, setShowAllTodo] = useState(false);

    const agregarTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const actualizarEstado = (id) => {
        const newArray = todos.map((tarea) => {
            if (id === tarea.id) {
                tarea.completed = !tarea.completed;
            }
            return tarea;
        });
        setTodos(newArray);
    };

    // useEffect(() => {
    //     const newCompletedTodo = [];
    //     const newActiveTodo = [];

    //     todos.forEach((todo) => {
    //         if (todo.completed) {
    //             newCompletedTodo.push(todo);
    //         } else {
    //             newActiveTodo.push(todo);
    //         }
    //     });

    //     setCompletedTodo(newCompletedTodo);
    //     setActiveTodo(newActiveTodo);
    // }, [todos]);

    const eliminarTodo = (id) => {
        const newArray = todos.filter((todo) => todo.id !== id);
        setTodos(newArray);
    };

    const clearComplete = () => {
        const newArray = todos.filter((todo) => !todo.completed);
        setTodos(newArray);
    };

    const getTodos = () => {
        if (showCompletedTodo) return todos.filter((todo) => todo.completed);
        if (showActiveTodo) return todos.filter((todo) => !todo.completed);
        return todos;
    };

    return (
        <main className="container mx-auto max-w-2xl px-6">
            <Form agregarTodo={agregarTodo} error={error} setError={setError} />

            <TodoList
                todos={getTodos()}
                error={error}
                actualizarEstado={actualizarEstado}
                eliminarTodo={eliminarTodo}
                // activeTodo={activeTodo}
                // completedTodo={completedTodo}
                // showCompletedTodo={showCompletedTodo}
                // showActiveTodo={showActiveTodo}
                // showAllTodo={showAllTodo}
            />

            {todos.length !== 0 && (
                <ComputedTodo
                    todos={todos}
                    actualizarEstado={actualizarEstado}
                    clearComplete={clearComplete}
                />
            )}

            {todos.length !== 0 && (
                <FilterTodo
                    setShowActiveTodo={setShowActiveTodo}
                    setShowCompletedTodo={setShowCompletedTodo}
                    setShowAllTodo={setShowAllTodo}
                />
            )}
        </main>
    );
};

export default Main;
