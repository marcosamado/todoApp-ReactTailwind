import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-100 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
                <header className="container mx-auto px-6 pt-8">
                    <div className="flex justify-between">
                        <h1 className=" text-3xl font-semibold uppercase tracking-[0.4em] text-white">
                            Todo
                        </h1>
                        <button className="">
                            {<MoonIcon color="black" />}
                        </button>
                    </div>
                </header>
                <main className="container mx-auto px-6">
                    {/* Todo CreateTodo  - Formulario que crea la todo*/}
                    <form className="mb-5 mt-8 flex items-center gap-2 overflow-hidden rounded-md bg-white px-5 py-3.5">
                        <span className=" inline-block h-5 w-5 rounded-full border-2 border-slate-200"></span>
                        <input
                            className="w-full text-gray-500 outline-none"
                            type="text"
                            placeholder="Create a new todo..."
                        />
                    </form>

                    {/* Todo Item - Sector donde se apilan las todos - (va a contener Update todo y Delete todo) */}
                    <article className="flex gap-2 rounded-md border-2 border-slate-200 bg-white px-4 py-3.5">
                        <button className="h-5 w-5 flex-none rounded-full border-2 border-slate-200"></button>
                        <p className="grow pt-0.5 text-xs font-bold text-gray-600">
                            Complete online JavaScript Curse
                        </p>
                        <button className="flex-none">{<CrossIcon />}</button>
                    </article>
                    <article className="flex gap-2 rounded-md border-2 border-slate-200 bg-white px-4 py-3.5">
                        <button className="h-5 w-5 flex-none rounded-full border-2 border-slate-200"></button>
                        <p className="grow pt-0.5 text-xs font-bold text-gray-600">
                            Complete online JavaScript Curse
                        </p>
                        <button className="flex-none">{<CrossIcon />}</button>
                    </article>
                    <article className="flex gap-2 rounded-md border-2 border-slate-200 bg-white px-4 py-3.5">
                        <button className="h-5 w-5 flex-none rounded-full border-2 border-slate-200"></button>
                        <p className="grow pt-0.5 text-xs font-bold text-gray-600">
                            Complete online JavaScript Curse
                        </p>
                        <button className="flex-none">{<CrossIcon />}</button>
                    </article>
                    <article className="flex gap-2 rounded-md border-2 border-slate-200 bg-white px-4 py-3.5">
                        <button className="h-5 w-5 flex-none rounded-full border-2 border-slate-200"></button>
                        <p className="grow pt-0.5 text-xs font-bold text-gray-600">
                            Complete online JavaScript Curse
                        </p>
                        <button className="flex-none">{<CrossIcon />}</button>
                    </article>
                    <article className="flex gap-2 rounded-md border-2 border-slate-200 bg-white px-4 py-3.5">
                        <button className="h-5 w-5 flex-none rounded-full border-2 border-slate-200"></button>
                        <p className="grow pt-0.5 text-xs font-bold text-gray-600">
                            Complete online JavaScript Curse
                        </p>
                        <button className="flex-none">{<CrossIcon />}</button>
                    </article>
                    
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

                {/* Footer - Drag and Drop */}
                <footer className="container mx-auto px-6">
                    <p className="mt-20 pt-0.5 text-center text-xs font-bold text-gray-400">
                        Drag and drop to reorder list
                    </p>
                </footer>
            </div>
        </>
    );
};

export default App;
