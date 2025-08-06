function CardItem() {
    return (
        <div className=" bg-white shadow-md rounded-lg flex flex-col justify-baseline items-center gap-5 h-96">
            <div className="bg-black w-full h-1/2 rounded-t-lg">.</div>
            <p className="text-gray-700 p-4 text-sm md:text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste magni cumque vero ipsum maiores! Magnam iure doloribus,</p>
            <a href="">Acessar o Catálogo    <i className='bx  bx-book ml-0.5 '  ></i></a>
        </div>
    );
}

export default CardItem;