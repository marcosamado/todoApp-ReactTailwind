import React from 'react';
import CrossIcon from '../icons/CrossIcon';
import Form from './Form';
import Todo from './Todo';

const Main = () => {




    return (
        <main className="container mx-auto px-6">
            {/* Todo CreateTodo  - Formulario que crea la todo*/}
            <Form />

            {/* Todo Item - Sector donde se apilan las todos - (va a contener Update todo y Delete todo) */}
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            
            
            
            {/* Todo computed - Opciones Eliminar todos Completados y calculo todos incompletas*/}
            <section className="flex justify-between gap-2 rounded-md border-2 border-slate-200 bg-white px-4 py-3.5 shadow-lg">
                <span className="pt-0.5 text-xs font-bold text-gray-300">
                    5 items left
                </span>
                <button className="pt-0.5 text-xs font-bold text-gray-300">
                    Clear Completed
                </button>
            </section>

            {/* Todo Filter - Muestra todas las todos, las activas y las completadas */}
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
        </main>
    )
}

export default Main