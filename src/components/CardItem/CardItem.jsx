import { Link } from "react-router-dom";

function CardItem(props) {
    return (
        <div className=" bg-white rounded-lg flex flex-col justify-baseline items-center gap-3 h-96 border-2 border-gray-300 shadow-lg hover:border-gray-500 hover:shadow-xl transition-all duration-300">
            <div
                className="w-full h-1/2 rounded-t-lg shadow-lg shadow-gray-700/20 bg-contain bg-center bg-no-repeat "
                style={{ backgroundImage: `url(${props.imgUrl})` }}
            ></div>
            <div className="flex flex-col">
                    <h2 className="text-center">{props.nomeProd}</h2>
                <p className="text-gray-700 p-4 text-sm md:text-sm text-center">{props.descProd}</p>
            </div>
            <Link to={"/catalogo"} className="border-gray-500 backdrop-blur-2xl bg-black/30 text-white border-2 p-2 rounded-4xl hover:border-2 hover:border-sky-700  hover:bg-white hover:text-amber-500 transition-all duration-600">Acessar o Catálogo<i className='bx  bx-book ml-1 '  ></i></Link>
        </div>
    );
}

export default CardItem;