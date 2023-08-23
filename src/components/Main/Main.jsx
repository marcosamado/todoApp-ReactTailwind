import React, { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import ComputedTodo from "./ComputedTodo";
import FilterTodo from "./FilterTodo";

const Main = () => {
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(false);

    const agregarTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    return (
        <main className="container mx-auto px-6">
            {/* Todo CreateTodo  - Formulario que crea la todo*/}
            <Form agregarTodo={agregarTodo} error={error} setError={setError} />
            {/* Todo Item - Sector donde se apilan las todos - (va a contener Update todo y Delete todo) */}
            {/* {todos.length === 0 && !error ? (
                <h2 className="mb-10 mt-5 text-center text-2xl font-semibold uppercase tracking-[0.4em] text-white">
                    No hay todos
                </h2>
            ) : (
                <div>
                    {todos.map((todo, index) => (
                        <TodoList key={index} toDo={todo} />
                    ))}
                </div>
            )} */}
            <TodoList todos={todos}/>
            {/* Todo computed - Opciones Eliminar todos Completados y calculo todos incompletas*/}

            {todos.length !== 0 && <ComputedTodo />}
            {/* Todo Filter - Muestra todas las todos, las activas y las completadas */}
            {todos.length !== 0 && <FilterTodo />}
        </main>
    );
};

export default Main;
