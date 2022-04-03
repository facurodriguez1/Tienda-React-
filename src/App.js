import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ClassCounter from './components/classCounter';
import Counter from './components/count';
import { useState } from 'react';

const App = () => {
  const [show, setShow] = useState(true)
 
   const handleOnAdd = (quantity) => {
     console.log(`se agregaron ${quantity} productos`)
   }
 
   return (
       <div className="App">
      
        <NavBar/>
        <div className='contenido'>
         <ItemListContainer greeting= {"Hola, estamos construyendo el sitio."}/>
         <button onClick={() => setShow(!show)}>{show ? 'Desmontar contador' : 'Montar contador'}</button>
         { show ? <Counter initial={0} stock={10} onAdd={handleOnAdd}/> : null }
         </div>
       </div>
   );
 }
 
 export default App;
