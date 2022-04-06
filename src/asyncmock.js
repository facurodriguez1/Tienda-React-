import artaud from './img/artaud.jpg'
import durazno from './img/durazno_sangrando.jpg'
import invisible from './img/invisible.jpg'
import jardin from './img/jardin de los presentes.jpg'
import kamikaze from './img/kamikaze.jpg'
import desatormentandonos from './img/desatormentandonos.jpg'
const products = [
    {id: 1, name: 'Vinilo Artaud', price: 20000, category: 'vinilo', img: artaud, stock: 15},
    { id: 2, name: 'Durazno Sangrando', price: 18000, category: 'vinilo', img: durazno, stock: 14},
    { id: 3, name: 'Invisible', price: 19000, category: 'disco', img:invisible, stock: 10},
    {id: 4, name: 'Jardín de los presentes', price: 20000, category: 'vinilo', img:jardin, stock: 15},
    { id: 5, name: 'Kamikaze', price: 18000, category: 'vinilo', img:kamikaze, stock: 14},
    { id:6, name: 'Desatormentandonos', price: 19000, category: 'disco', img:desatormentandonos, stock: 10}
    
]

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
} 