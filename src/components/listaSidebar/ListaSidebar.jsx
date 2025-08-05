function ListaSidebar(props) {
    return (
            <li className="p-5 w-full h-17 text-left font-mono text-2xl hover:bg-amber-400 hover:text-white transition-all duration-200 cursor-pointer">{props.nome}</li>
    );
}

export default ListaSidebar;