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
                <CardItem nomeProd="Palmilha" descProd="Palmilha anatômica em couro legítimo, conforto e durabilidade para seus pés." imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiW7NkkjzJHtOZoGeWXzJz4f1c533KXhx81Q&s"/>
                <CardItem nomeProd="Carteira " descProd="Carteira masculina em couro premium, design clássico e elegante." imgUrl = "https://images.vexels.com/media/users/3/157107/isolated/preview/ccd65f02db5b04645112801d922cdffe-icones-de-viagens-do-icone-da-carteira.png" />
                <CardItem nomeProd="Bolsa " descProd="Bolsa feminina em couro natural, perfeita para todas as ocasiões." imgUrl = "https://images.icon-icons.com/1465/PNG/512/426handbag_100416.png" />
                <CardItem nomeProd="Cinto"
                    descProd="Cinto de couro reforçado, ideal para uso diário com estilo." imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR45Q8oY5VIQtFyKm3kTch21NqEZu-GYR0AXQ&s" />
                <CardItem nomeProd="Mochila " descProd="Mochila em couro, design moderno e espaço para tudo o que você precisa." imgUrl = "https://cdn-icons-png.flaticon.com/512/8812/8812413.png" />
                <CardItem nomeProd="Necessaire " descProd="Necessaire em couro, organização e beleza para seus acessórios." imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBqjA6Q0Fa07CfkLKp4FCzusJvSA-Rjhladg&s"/>
                <CardItem nomeProd="Sapato" descProd="Sapato social em couro legítimo, acabamento impecável e conforto garantido." imgUrl = "https://images.vexels.com/media/users/3/205944/isolated/preview/be410d2967e8672aecc833c2b0acaba7-icone-de-tracado-de-sapato-marrom.png" />
                <CardItem nomeProd="Rebite" descProd="Rebite resistente, ideal para reforçar e decorar acessórios com estilo e durabilidade." imgUrl = "https://static.vecteezy.com/ti/vetor-gratis/p1/14571010-icone-de-rebite-estilo-simples-vetor.jpg" />
            </main>
            <Rodape />
        </>
    );
}

export default App;
