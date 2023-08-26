import React, { useEffect, useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import ComputedTodo from "./ComputedTodo";
import FilterTodo from "./FilterTodo";

const Main = () => {
    const [todos, setTodos] = useState([]);
    // const [todosBase, setTodosBase] = useState([]);
    const [error, setError] = useState(false);

    const agregarTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    // useEffect(() => {
    //     setTodosBase([...todos]);
    // }, [todos]);

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

    const filterActive = () => {
        const newArray = todos.filter((todo) => !todo.completed);
        setTodos(newArray);
    };

    const filterCompleted = () => {
        const newArray = todos.filter((todo) => todo.completed);
        setTodos(newArray);
    };

    const filterAll = () => {
        const newArray = todos.filter((todo) => todo);
        setTodos([...todos]);
    };

    return (
        <main className="container mx-auto px-6">
            {/* Todo CreateTodo  - Formulario que crea la todo*/}
            <Form agregarTodo={agregarTodo} error={error} setError={setError} />
            {/* Todo Item - Sector donde se apilan las todos - (va a contener Update todo y Delete todo) */}

            <TodoList
                todos={todos}
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
                    filterActive={filterActive}
                    filterCompleted={filterCompleted}
                    filterAll={filterAll}
                />
            )}
        </main>
    );
};

export default Main;
