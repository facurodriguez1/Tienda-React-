import { useState,createContext } from 'react'
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { CartContextProvider } from './components/context/CartContext';
import {NotificationProvider} from './components/Notification/Notification'
import Cart from './components/Cart/Cart';



const App = () => {
 // const [cart,setCart] = useState ([])
  //console.log(cart)

  return (
      <div className="App">
      {/* <Context.Provider value={{cart, setCart}}> */}
      <CartContextProvider>
        <NotificationProvider>
        <BrowserRouter>
          <NavBar />
        
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
            <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
        </NotificationProvider>
        </CartContextProvider>
    
        
        </div>
    
  );
}

export default App;