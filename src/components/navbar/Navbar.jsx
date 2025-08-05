function Navbar(props) {
    return (
        <nav className="flex items-center justify-around h-16 w-full bg-red-600 text-white">
            <div className="w-8 h-8 flex justify-center items-center cursor-pointer" onClick={props.onMenuClick}><i className="bx bx-menu bx-md" /></div>
            <div className="w-1/2 h-8">
                <input type="text" name="Pesquisa" id="InputPesquisa" placeholder="PESQUISAR" className="bg-white h-full w-full text-black rounded-3xl font-bold font-mono pl-8" />
               <i className='bx bx-ms bx-search text-black relative bottom-6.5 left-2'></i> 
            </div>
            <div className="w-8 h-8 cursor-pointer flex justify-center items-center">
                <i className='bx  bx-cart bx-md'  ></i>
            </div>
        </nav>
    )
}

export default Navbar;