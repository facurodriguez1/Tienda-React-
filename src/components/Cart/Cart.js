import { useContext } from "react"
import CartContext from "../context/CartContext"
import "./Cart.css"

const Cart = () => {

    const { cart, removeItem } = useContext(CartContext)

    if(cart.length === 0) {
        return (
            <h1>No hay productos</h1>
        )
    }

    return (
        <>
        <div className="cartContainer">
        <h1 className="cart">Carrito</h1>
        <div className="cart2">
            <ul>
            {
                cart.map(prod => <li key={prod.id}>{prod.name}  cantidad: {prod.quantity} precio uni: {prod.price}  subtotal: {prod.quantity * prod.price} <button className="btn-danger" onClick={() => removeItem(prod.id)}>X</button></li>)
            }   
            </ul> 
        </div>
        </div>
        </>
    )
}

export default Cart