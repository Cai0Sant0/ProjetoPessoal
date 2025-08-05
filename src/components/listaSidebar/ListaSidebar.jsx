function ListaSidebar(props) {
    return (
         <div className="flex justify-center items-center w-full h-8">
                    <ul className="flex flex-col w-full justify-center items-center text-center">
                        <li className="p-4 w-full text-left font-mono text-2xl hover:bg-red-600 hover:text-white transition-all duration-200 cursor-pointer">{props.nome}</li>
                    </ul>
                </div>
    );
}

export default ListaSidebar;