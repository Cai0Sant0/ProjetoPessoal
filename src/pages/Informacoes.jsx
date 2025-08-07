import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { useState } from "react";

function Informacoes() {
     const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div>
            <Navbar onMenuClick={() => setSidebarOpen(true)} />
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
             <h1 className="w-full text-2xl text-center font-bold font-mono p-3 md:text-4xl">Informações</h1>
        </div>
    );
}
export default Informacoes;