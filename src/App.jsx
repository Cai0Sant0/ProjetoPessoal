import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { useState } from "react";

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <>
            <Navbar onMenuClick={() => setSidebarOpen(true)} />
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <h1 className="w-full text-2xl text-center font-bold font-mono p-6 md:text-4xl">Produtos Em Destaque!</h1>
            <main className="grid grid-cols-1 h-200 bg-amber-500 p-2 gap-2 md:grid-cols-4 md:h-100 md:p-4">
                <div className="p-4 bg-white shadow-md rounded-lg  flex flex-col justify-around items-center">
                    <h2 className="text-xl font-semibold">Produto 1</h2>
                    <p className="text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste magni cumque vero ipsum maiores! Magnam iure doloribus,</p>
                </div>
                  <div className="p-4 bg-white shadow-md rounded-lg  flex flex-col justify-around items-center">
                    <h2 className="text-xl font-semibold">Produto 1</h2>
                    <p className="text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste magni cumque vero ipsum maiores! Magnam iure doloribus,</p>
                </div>
                  <div className="p-4 bg-white shadow-md rounded-lg  flex flex-col justify-around items-center">
                    <h2 className="text-xl font-semibold">Produto 1</h2>
                    <p className="text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste magni cumque vero ipsum maiores! Magnam iure doloribus,</p>
                </div>
                <div className="p-4 bg-white shadow-md rounded-lg  flex flex-col justify-around items-center">
                    <h2 className="text-xl font-semibold">Produto 1</h2>
                    <p className="text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste magni cumque vero ipsum maiores! Magnam iure doloribus,</p>
                </div>
            </main>
            <footer className="mt-4 bg-amber-400">
                <div className="bg-gray-800 text-white text-center p-4">
                    <p>&copy; 2023 Meu Site. Todos os direitos reservados.</p>
                </div>
            </footer>
        </>
    );
}

export default App;
