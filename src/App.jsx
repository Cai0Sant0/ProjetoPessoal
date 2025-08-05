import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { useState } from "react";

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <>
            <Navbar onMenuClick={() => setSidebarOpen(true)} />
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <main className="p-6 h-full w-full flex flex-col items-center justify-betweenfont-mono">
                <h1 className="text-3xl font-bold">Produtos</h1>
                <section className="mt-4 w-full h-80 max-w-6xl bg-black shadow-md rounded-lg p-6 flex justify-around items-center gap-4">
                    <div className="flex flex-col items-center justify-center h-10/12 w-4xl bg-white rounded-lg shadow-lg">
                        .
                    </div>
                    <div className="flex flex-col items-center justify-center h-10/12 w-4xl bg-white rounded-lg shadow-lg">
                        .
                    </div>
                    <div className="flex flex-col items-center justify-center h-10/12 w-4xl bg-white rounded-lg shadow-lg">
                        .
                    </div>

                </section>
            </main>

        </>
    );
}

export default App;
