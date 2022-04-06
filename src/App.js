import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ClassCounter from './components/classCounter';
import Counter from './components/count';
import { useState } from 'react';
import './components/Item.css'

const App = () => {
  const [show, setShow] = useState(true)
 
   const handleOnAdd = (quantity) => {
     console.log(`se agregaron ${quantity} productos`)
   }
 
   return (
       <div className="App">
      
        <NavBar/>
        <div className='contenido'>
         <div className='productsContent'>
           <ItemListContainer greeting= {"Hola, estamos construyendo el sitio."}/>
         </div>

         {/* <button onClick={() => setShow(!show)}>{show ? 'Desmontar contador' : 'Montar contador'}</button> */}
         { show ? <Counter initial={0} stock={10} onAdd={handleOnAdd}/> : null }
         </div>
       </div>
   );
 }
 
 export default App;
