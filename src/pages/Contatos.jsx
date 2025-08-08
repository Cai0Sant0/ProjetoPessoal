import Navbar from "../components/navbar/Navbar";
import Rodape from "../components/Rodape/Rodape";
import Sidebar from "../components/sidebar/Sidebar";
import { useState } from "react";

function Contatos() {
     const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div>
            <Navbar onMenuClick={() => setSidebarOpen(true) } inputInvisivel = {true}/>
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
             <h1 className="w-full text-2xl text-center font-bold font-mono p-4 md:text-4xl">Contatos</h1>
             <main className="grid grid-cols-1 md:grid-cols-2 min-h-svh">
               <div className="w-full h-full flex justify-center items-center flex-col gap-20 md:gap-40">
                    <h1>Contatos Loja</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, obcaecati nemo nulla fugiat quaerat pariatur necessitatibus odio eligendi consequatur sint voluptatem a voluptatum architecto eaque non. Obcaecati sed officiis neque.</p>
               </div>
                <div className="w-full h-full flex justify-center items-center flex-col gap-20 md:gap-40">
                    <h1>Contatos couro</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, minima ratione libero eum, non suscipit accusamus inventore nostrum architecto eaque aut minus voluptatem excepturi doloribus ducimus vitae ullam iusto fugiat!</p>
                </div>
             </main>
             <Rodape/>
        </div>
    );
}
export default Contatos;