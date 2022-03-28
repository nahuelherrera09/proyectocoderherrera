import React from 'react'
import CartWidget from './CartWidget'


const Navbar = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
        
      
     
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar