import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import CardItem from "./components/CardItem/CardItem";
import Rodape from "./components/Rodape/Rodape";
import { useState } from "react";

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <>
            <Navbar onMenuClick={() => setSidebarOpen(true)} />
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <h1 className="w-full text-2xl text-center font-bold font-mono p-6 md:text-4xl">Produtos Em Destaque!</h1>
            <main className="grid grid-cols-1 md:grid-cols-4 min-h-svh p-8 gap-4">
                <CardItem nomeProd="Palmilha" descProd="AAAAAAAAAAAAAAA" />
                <CardItem nomeProd="Palmilha" descProd="AAAAAAAAAAAAAAA" />
                <CardItem nomeProd="Palmilha" descProd="AAAAAAAAAAAAAAA" />
                <CardItem nomeProd="Palmilha" descProd="AAAAAAAAAAAAAAA" />
                <CardItem nomeProd="Palmilha" descProd="AAAAAAAAAAAAAAA" />
                <CardItem nomeProd="Palmilha" descProd="AAAAAAAAAAAAAAA" />
                <CardItem nomeProd="Palmilha" descProd="AAAAAAAAAAAAAAA" />
                <CardItem nomeProd="Palmilha" descProd="AAAAAAAAAAAAAAA" />
            </main>
            <Rodape />
        </>
    );
}

export default App;
