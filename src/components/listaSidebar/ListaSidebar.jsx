function ListaSidebar(props) {
    return (
            <li className="p-2 w-full h-full text-left font-mono text-2xl hover:bg-red-600 hover:text-white transition-all duration-200 cursor-pointer">{props.nome}</li>
    );
}

export default ListaSidebar;