import Navbar from "../components/navbar/Navbar";
import Rodape from "../components/Rodape/Rodape";
import Sidebar from "../components/sidebar/Sidebar";
import { useState } from "react";

function Contatos() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <Navbar onMenuClick={() => setSidebarOpen(true)} inputInvisivel={true} />
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <h1 className="w-full text-2xl text-center font-bold font-mono p-4 md:text-4xl">Contatos</h1>
        </>
    );
}
export default Contatos;