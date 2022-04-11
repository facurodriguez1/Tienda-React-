import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({products}) => {

    return(
     <div className='contenido'> 
        <div className='productsContent'>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    </div>         
    )
}

export default ItemList