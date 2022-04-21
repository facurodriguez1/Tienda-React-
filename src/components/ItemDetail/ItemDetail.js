import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext'
import Counter from '../Counter/Counter'



/* const InputCount = ({onConfirm, stock, initial=1}) => {
    const [count, setCount] = useState(initial)
    console.log(stock)
    const handleChange = (e) => {

        if(e.target.value <= stock)
        {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}
 */


const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
    const [quantity, setQuantity] = useState (0)
    // const Count = InputCount

   const{addItem} = useContext(CartContext)
    
    const handleAdd = (count) => {
        console.log ('Se agregó al carrito')
        const objProd ={
            id, name, price
        }
        addItem({...objProd, quantity:count})
        setQuantity (count)
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
                    Categoria: {category}
                </p>
                <p className="">
                    Descripción: {description}
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