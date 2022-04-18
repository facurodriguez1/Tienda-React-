import { useState, useEffect } from 'react'
import './count.css'

const Counter = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(0)


    const decrement = () => {
        if(count>initial){
        setCount(count - 1)
        }
    }

    const increment = () => {
        if(count<stock){
        setCount(count + 1)
        }
    }

    //console.log('Esto esta en el cuerpo del componente')
    return(
        <div className='count'>
            <div className='contador'>
            <button type="button" class="btn btn-primary" onClick={decrement}>-</button> 
             <p>{count}</p> 
             <button type="button" class="btn btn-primary" onClick={increment}>+</button>
             </div>
             <div className='agregar'>
            <button type="button" class="btn btn-primary" onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
} 

export default Counter