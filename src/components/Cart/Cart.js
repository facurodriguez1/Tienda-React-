import { useContext, useState } from "react"
import CartContext from "../context/CartContext"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"
import { getDocs, writeBatch, query, where, collection, documentId, addDoc} from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/index'
import Form from "../Form/Form"



const Cart = () => {
    const [loading, setLoading] = useState(false)

    const { cart, clearCart, getTotal, getQuantity } = useContext(CartContext)

  
   

    const createOrder = () => {
        setLoading(true)

        const objOrder = {
            items: cart,
            buyer: {
                name: '',
                email: ''
            },
            total: getTotal(),
            date: new Date()
        }

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb)

        const collectionRef = collection(firestoreDb, 'products')

        const outOfStock = []


    

   

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc })
                    }
                })
            }).then(() => {
                if(outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ name: 'outOfStockError', products: outOfStock})
                }
            }).then(({ id }) => {
                batch.commit()
                console.log(`El id de la orden es ${id}`)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    }

    if(loading) {
        return <h1>Se esta generando su orden</h1>
    }

    if(getQuantity() === 0) {
        return (
            <h1>No hay productos en el carrito</h1>
        )
    }

    return (     
        <div className="carrito">
            <h1>Carrito</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${getTotal()}</h3>
            <div className="botones">
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <button onClick={() => createOrder()} className="Button">Generar Orden</button>
            <Form/>

            </div>

        </div>
    )
}

export default Cart