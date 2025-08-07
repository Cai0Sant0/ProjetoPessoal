import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <nav className="flex items-center justify-around h-16 w-full bg-sky-800 text-white">
            <div className="w-8 h-8 flex justify-center items-center cursor-pointer" onClick={props.onMenuClick}><abbr title="Menu"><i className="bx bx-menu bx-md" /></abbr></div>
            <div className="w-1/2 h-8">
                {
                    props.inputInvisivel ? (
                        <h1 className=" text-xl md:text-2xl font-bold font-mono text-center">Loja de couro Caioba</h1>
                    ) : (
                        <>
                            <input type="text" name="Pesquisa" id="InputPesquisa" placeholder="PESQUISAR" className="bg-white h-full w-full text-black rounded-3xl font-bold font-mono pl-8" value={props.pesquisa} onChange={e => props.setPesquisa(e.target.value)} />
                            <i className='bx bx-ms bx-search text-black relative bottom-6.5 left-2'></i>
                        </>
                    )
                }

            </div>
            <Link to={"/catalogo"} className="w-8 h-8 cursor-pointer flex justify-center items-center">
                <abbr title="Catálogos"><i className='bx  bx-book bx-md'  ></i> </abbr>
            </Link>
        </nav>
    )
}

export default Navbar;