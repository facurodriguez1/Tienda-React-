import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext'
import Counter from '../Counter/Counter'
import { useNotification } from '../Notification/Notification'




const ItemDetail = ({ id, name, img, category, artist, price, stock}) => {
    const [quantity, setQuantity] = useState (0)


   const{addItem} = useContext(CartContext)
   const { setNotification } = useNotification()
    
    const handleAdd = (count) => {
        console.log ('Se agregó al carrito')
        const objProd ={
            id, name, price
        }
        addItem({...objProd, quantity:count})
        setQuantity (count)
        setNotification('error', `Se agregaron ${count} ${name} correctamente`)
    }
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
                    Artista: {artist}
                </p>
                <p className="">
                    Categoria: {category}
                </p>
                <p className="">
                    Precio: {price}
                </p>
            </section>   
            <footer>
              { quantity > 0 ? <Link to = '/cart'>Ir al carrito</Link>:<Counter onAdd={handleAdd} stock={stock}/>}
            </footer>        
             
        </article>
    )
}

export default ItemDetail