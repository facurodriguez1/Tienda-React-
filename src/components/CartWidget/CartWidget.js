import './CartWidget.css'
import carrito from './cart.svg'
import { useContext } from 'react';
import CartContext from '../context/CartContext';

const CartWidget = () => {

    const {getQuantity}= useContext(CartContext)
    return(
        <div className="CartWidget">
            <img src={carrito} alt='cart' className='CartImg'/>
            { getQuantity() }
        </div>
    );
}

export default CartWidget