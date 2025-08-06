function CardItem(props) {
    return (
        <div className=" bg-white rounded-lg flex flex-col justify-baseline items-center gap-3 h-96 border-2 border-gray-300 shadow-lg">
            <div className="w-full h-1/2 rounded-t-lg border-gray-300 shadow-lg"></div>
            <div className="flex flex-col">
                    <h2 className="text-center">{props.nomeProd}</h2>
                <p className="text-gray-700 p-4 text-sm md:text-sm">{props.descProd}</p>
            </div>
            <a href="">Acessar o Catálogo<i className='bx  bx-book ml-0.5 '  ></i></a>
        </div>

        // 10px -1px 20px 0px #00000054
    );
}

export default CardItem;