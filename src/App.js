import { useState } from 'react'
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'



const App = () => {
  const [cart,setCart] = useState ([])
  console.log(cart)

  return (
      <div className="App">
     
        <BrowserRouter>
          <NavBar />
        
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer setCart={setCart} cart={cart} />}/>
            <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
          </Routes>
        </BrowserRouter>
        
        </div>
    
  );
}

export default App;