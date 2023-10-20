import { useEffect, useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import ComputedTodo from "./ComputedTodo";
import FilterTodo from "./FilterTodo";
import { DragDropContext } from "@hello-pangea/dnd";

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];

const Main = () => {
    const [todos, setTodos] = useState(initialTodos);
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

    const handleDragEnd = (result) => {
        const { source, destination } = result;
        if (!destination) return;
        if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
        )
            return;
        setTodos((prevTodos) =>
            reorder(prevTodos, source.index, destination.index)
        );
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <main className="container mx-auto max-w-2xl px-6">
            <Form agregarTodo={agregarTodo} error={error} setError={setError} />

            <DragDropContext onDragEnd={handleDragEnd}>
                <TodoList
                    todos={getTodos()}
                    error={error}
                    actualizarEstado={actualizarEstado}
                    eliminarTodo={eliminarTodo}
                />
            </DragDropContext>

            <ComputedTodo
                todos={todos}
                actualizarEstado={actualizarEstado}
                clearComplete={clearComplete}
            />

            <FilterTodo
                setShowActiveTodo={setShowActiveTodo}
                setShowCompletedTodo={setShowCompletedTodo}
                setShowAllTodo={setShowAllTodo}
                showCompletedTodo={showCompletedTodo}
                showActiveTodo={showActiveTodo}
                showAllTodo={showAllTodo}
            />
        </main>
    );
};

export default Main;
