import { useState } from 'react'

const Counter = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(0)
 

    const decrement = () => {
        if (count>0)
        setCount(count - 1)
    }

    const increment = () => {
        if (count<stock)
        setCount(count + 1)
    }

    return(

        <div align="left">          
        <table >
            <tbody>
                <tr>
                    <td align="left"><button className="Option" onClick={decrement}>-</button></td>
                    <td align="center" style={{fontSize : '20px'}}>{count}</td>
                    <td align="right"><button className="Option" onClick={increment}>+</button></td>
                </tr>
                <tr>
                    <td align="center" colSpan="5"><button className="Option" onClick={() => onAdd(count)}>Agregar al carrito</button></td>
                </tr>
            </tbody>
        </table>       
    </div>
    )
} 

export default Counter