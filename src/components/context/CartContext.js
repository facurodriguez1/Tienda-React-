import { createContext, useState} from "react";

const CartContext = createContext()

export const CartContextProvider = ({children}) => {

    const[cart,setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        setCart([...cart, productToAdd ])
    }

    
    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count += prod.quantity
        })

        return count
    }

    return(
        <CartContext.Provider value={{
            cart,
            addItem,
            getQuantity
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext