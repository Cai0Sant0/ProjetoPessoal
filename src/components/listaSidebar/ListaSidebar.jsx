function ListaSidebar(props) {
    return (
            <a href="" className="p-5 w-full h-17 text-left font-mono text-2xl hover:bg-amber-400 hover:text-white transition-all duration-200 cursor-pointer">{props.nome}</a>
    );
}

export default ListaSidebar;