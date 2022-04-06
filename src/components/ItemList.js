import Item from './Item'

const ItemList = ({products}) => {

    return(
        <div className='productsContent'>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>    
    )
}

export default ItemList