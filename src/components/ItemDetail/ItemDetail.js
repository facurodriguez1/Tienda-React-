import './ItemDetail.css'


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    return (
        <article className="productos">
          
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img className='imgDetail' src={img} alt={name} />
            </picture>
            <section>
                <p className="">
                    Categoria: {category}
                </p>
                <p className="">
                    Descripción: {description}
                </p>
                <p className="">
                    Precio: {price}
                </p>
            </section>           
             
        </article>
    )
}

export default ItemDetail