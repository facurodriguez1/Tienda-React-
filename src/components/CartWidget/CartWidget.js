import './CartWidget.css'
import carrito from './cart.svg'
const CartWidget = () => {

    return(
        <div className="CartWidget">
            <img src={carrito} alt='cart' className='CartImg'/>
            { 0 }
        </div>
    );
}

export default CartWidget