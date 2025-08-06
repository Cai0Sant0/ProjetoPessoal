function CardItem(props) {
    return (
        <div className=" bg-white rounded-lg flex flex-col justify-baseline items-center gap-3 h-96 border-2 border-gray-300 shadow-lg hover:border-gray-500 hover:shadow-xl transition-all duration-300">
            <div className={`w-full h-1/2 rounded-t-lg border-gray-300 shadow-lg bg-[url(${props.imgUrl})] bg-cover bg-center`}></div>
            <div className="flex flex-col">
                    <h2 className="text-center">{props.nomeProd}</h2>
                <p className="text-gray-700 p-4 text-sm md:text-sm text-center">{props.descProd}</p>
            </div>
            <a href="">Acessar o Catálogo<i className='bx  bx-book ml-0.5 '  ></i></a>
        </div>
    );
}

export default CardItem;