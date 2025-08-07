import { Link } from "react-router-dom";

function ListaSidebar(props) {
    return (
            <Link to={props.url} className="p-5 w-full h-17 text-left font-mono text-2xl hover:bg-amber-400 hover:text-white transition-all duration-200 cursor-pointer">{props.nome}</Link>
    );
}

export default ListaSidebar;