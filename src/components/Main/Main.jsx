import React, { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import ComputedTodo from "./ComputedTodo";
import FilterTodo from "./FilterTodo";

const Main = () => {
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(false);

    const [showCompletedTodo, setShowCompletedTodo] = useState(false);
    const [showActiveTodo, setShowActiveTodo] = useState(false);
    const [showAllTodo, setShowAllTodo] = useState(true);

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
            {/* Todo CreateTodo  - Formulario que crea la todo*/}
            <Form agregarTodo={agregarTodo} error={error} setError={setError} />
            {/* Todo Item - Sector donde se apilan las todos - (va a contener Update todo y Delete todo) */}

            <TodoList
                todos={getTodos()}
                error={error}
                actualizarEstado={actualizarEstado}
                eliminarTodo={eliminarTodo}
            />
            {/* Todo computed - Opciones Eliminar todos Completados y calculo todos incompletas*/}

            {todos.length !== 0 && (
                <ComputedTodo
                    todos={todos}
                    actualizarEstado={actualizarEstado}
                    clearComplete={clearComplete}
                />
            )}
            {/* Todo Filter - Muestra todas las todos, las activas y las completadas */}
            {todos.length !== 0 && (
                <FilterTodo
                    setShowActiveTodo={setShowActiveTodo}
                    setShowCompletedTodo={setShowCompletedTodo}
                    setShowAllTodo={setShowAllTodo}
                    showCompletedTodo={showCompletedTodo}
                    showActiveTodo={showActiveTodo}
                    showAllTodo={showAllTodo}
                />
            )}
        </main>
    );
};

export default Main;
