import './NavBar.css'
import logoVinilo from './discco.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCategories } from '../../asyncmock'
import { firestoreDb } from '../../services/firebase'
import { getDocs,  collection, orderBy, query } from 'firebase/firestore'



const NavBar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    // getCategories().then(categories => {
    //   setCategories(categories)
    // })


    getDocs(query(collection(firestoreDb, 'categories'), orderBy("order", "asc"))).then(response => {
      const categories = response.docs.map(doc => {
        return { id: doc.id, ...doc.data()}
      })
      setCategories(categories)
      console.log(categories)
    })
  }, [])

  return (


       <nav className="NavBar" >

        <img src={logoVinilo} className="App-logo" alt="logo" />
        <Link  to='/'>
       
            <h3 className='titulo' >ViniloShop</h3>
        </Link>


        
        <div className="Categories">

          { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
            className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}
          >{cat.description}</NavLink>)}
        </div>
       
        <CartWidget/>
      </nav> 
  )
  
}

export default NavBar

