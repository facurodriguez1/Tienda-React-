import artaud from './img/artaud.jpg'
import durazno from './img/durazno_sangrando.jpg'
import sabbath from './img/black sabbath.jpg'
import redHot from './img/blood suugar.jpg'
import hendrix from './img/boldaslove.jpg'
import clics from './img/clics.jpg'
import floyd from './img/dark side.jpg'
import radiohead from './img/in rainbows.jpg'
import seru from './img/seru.jpg'
import beatles from './img/sgt peppers.jpg'
import cerati from './img/siempre es hoy.jpg'
import voxdei from './img/voxdei.jpg'


const products = [
    {id: '1', name: 'Dark Side of the Moon', price: 28000,description:`descripcion del disco`, category: 'internacional', img: floyd, stock: 3},
    {id: '2', name: 'In Rainbows', price: 20000,description:`descripcion del disco`, category: 'internacional', img: radiohead, stock: 10},
    {id: '3', name: 'Artaud', price: 23000,description:`descripcion del disco`, category: 'nacional', img: artaud, stock: 7},
    {id: '4', name: 'Clics Modernos', price: 18000,description:`descripcion del disco`, category: 'nacional', img: clics, stock: 15},
    {id: '5', name: 'Bold as Love', price: 19000,description:`descripcion del disco`, category: 'internacional', img: hendrix, stock: 14},
    {id: '6', name: 'Durazno Sangrando', price: 18000,description:`descripcion del disco`, category: 'nacional', img: durazno, stock: 12},
    {id: '7', name: 'Siempre es Hoy', price: 15000,description:`descripcion del disco`, category: 'nacional', img: cerati, stock: 14},
    {id: '8', name: 'Sgt. Peppers', price: 20000,description:`descripcion del disco`, category: 'internacional', img: beatles, stock: 10},
    {id: '9', name: 'Black Sabbath', price: 21000,description:`descripcion del disco`, category: 'internacional', img: sabbath, stock: 13},
    {id: '10', name: 'Blood Sugar Sex Magik', price: 14000,description:`descripcion del disco`, category: 'internacional', img: redHot, stock: 2},
    {id: '11', name: 'La Grasa de las Capitales', price: 18000,description:`descripcion del disco`, category: 'nacional', img: seru, stock: 1},
    {id: '12', name: 'La Biblia', price: 15000,description:`descripcion del disco`, category: 'nacional', img: voxdei, stock: 8}
   
]

const categories = [
    {id: 'internacional', description: 'internacional'},
    {id: 'nacional', description: 'nacional'},
    {id: 'contacto', description: 'contacto'}
    
] 



export const getCategories = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 500)
    })
}

export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 500)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}