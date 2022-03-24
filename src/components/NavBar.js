import './NavBar.css'
import logoVinilo from '../img/discco.png';


const NavBar = () => {
    return(

<nav class="navbar">
<li class="nav-item">
    <a class="navbar-brand" href="#">
    <img src={logoVinilo} className="App-logo" alt="logo" />
     Tienda
    </a>
    </li>
  <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link" href="#">Vinilos</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Discos</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Contacto</a>
  </li>
  
</ul>
</nav>



)
}

export default NavBar