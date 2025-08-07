import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { useState } from "react";

function SobreNos() {
     const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div>
            <Navbar onMenuClick={() => setSidebarOpen(true)} inputInvisivel = {true} />
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
             <h1 className="w-full text-2xl text-center font-bold font-mono p-3 md:text-4xl">Sobre Nós!</h1>
        </div>
    );
}
export default SobreNos;