import { useState, useEffect } from 'react'
import './count.css'

const Counter = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(0)
 
    useEffect(() => {
        console.log('Se acaba de montar el componente')
        let isActive = true

        setTimeout(() => {
            if(isActive) {
                setCount(10)       
            }
        }, 3000)

        return (() => {
            isActive = false
            console.log('Esto se ejecuta antes de desmontar el componente')
        })
    })

    useEffect(() => {
        console.log('cambio el count')
    }, [count])


    const decrement = () => {
        if(count>0){
        setCount(count - 1)
        }
    }

    const increment = () => {
        if(count<10){
        setCount(count + 1)
        }
    }

    console.log('Esto esta en el cuerpo del componente')
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