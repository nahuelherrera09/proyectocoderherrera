import React from 'react'
<<<<<<< HEAD
import CartWidget from './CartWidget'

=======
>>>>>>> 541cab305f4b8312550aa61e90eb2aaeeafebd76

const Navbar = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<<<<<<< HEAD
        <div className="container-fluid">
            <a className="navbar-brand" href="">SUPPORT</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
      
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">Categorías</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Envíos</a>
        </li>
      </ul>
      </div>
      <div className='nav-item'>
        <span> 
            <CartWidget></CartWidget>
        </span>
        
      
     
=======
  <div className="container-fluid">
    <a className="navbar-brand" href="#">SUPPORT</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className='mr-1'>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      
      <ul className="navbar-nav">
        <li className="nav-item">
        <a className="nav-link" href="#">Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Envíos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorías
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      </div>
>>>>>>> 541cab305f4b8312550aa61e90eb2aaeeafebd76
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar