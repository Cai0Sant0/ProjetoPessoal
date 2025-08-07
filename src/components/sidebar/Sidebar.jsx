import ListaSidebar from "../listaSidebar/ListaSidebar";

function Sidebar({ open, onClose }) {
    return (
        <>

            {open && (
                <div className="fixed inset-0 z-40" onClick={onClose}></div>
            )}
            <aside className={`
                    w-64 h-full shadow-xl/30 text-black flex justify-between flex-col z-50 fixed top-0 left-0
                    transition-transform duration-300 ease-in-out
                    ${open ? "translate-x-0" : "-translate-x-full"}
                `}>
                <div className="width-full h-16 flex justify-end items-center p-1.5 gap-19 bg-sky-800 text-white">
                    <h1 className="text-2xl font-bold text-center font-mono">MENU</h1>
                    <i className="bx  bx-x  cursor-pointer" onClick={onClose}></i>
                </div>
                <ul className="flex w-full bg-white text-center flex-col justify-center items-center h-10/12 gap-20 ">
                    <ListaSidebar nome="Home" url = "/" />
                    <ListaSidebar nome="Sobre Nós" url = "/sobreNos" />
                    <ListaSidebar nome="Informações" url = "/informacoes"  />
                </ul>
                <div className="flex justify-center items-center w-full h-13 gap-1 bg-sky-800 text-white">
                    <a href="" className="flex items-center justify-center p-2 rounded-3xl w-1/2 hover:text-black hover:bg-amber-400 transition-colors duration-300 cursor-pointer gap-1">
                        <p>Telefones</p>
                        <i className="bx bx-phone"></i>
                    </a>
                </div>
            </aside>
        </>
    );
}
export default Sidebar;