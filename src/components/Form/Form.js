
import { useState } from 'react'

const Form = () => {
    const [input, setInput] = useState({name:''})
    const [email, setEmail] = useState({email:''})


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
        console.log(email)
    }

    const handleKeyDown = (e) => {
        if(e.code === 'Space') {
            e.preventDefault()
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' 
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown} 
            />
             <input type='text' 
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown} 
            />
            <button type='submit'>submit</button>
        </form>
    )
}

export default Form 