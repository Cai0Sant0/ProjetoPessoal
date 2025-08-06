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
                <CardItem nomeProd="Palmilha" descProd="Palmilha anatômica em couro legítimo, conforto e durabilidade para seus pés." />
                <CardItem nomeProd="Carteira " descProd="Carteira masculina em couro premium, design clássico e elegante." />
                <CardItem nomeProd="Bolsa " descProd="Bolsa feminina em couro natural, perfeita para todas as ocasiões." />
                <CardItem nomeProd="Cinto" 
                descProd="Cinto de couro reforçado, ideal para uso diário com estilo." />
                <CardItem nomeProd="Mochila " descProd="Mochila em couro, design moderno e espaço para tudo o que você precisa." />
                <CardItem nomeProd="Necessaire " descProd="Necessaire em couro, organização e beleza para seus acessórios." />
                <CardItem nomeProd="Sapato" descProd="Sapato social em couro legítimo, acabamento impecável e conforto garantido." />
                <CardItem nomeProd="Rebite" descProd="Rebite resistente, ideal para reforçar e decorar acessórios com estilo e durabilidade." />
            </main>
            <Rodape />
        </>
    );
}

export default App;
