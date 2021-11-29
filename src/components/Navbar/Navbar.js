import React from 'react';
import {NavLink, Link} from 'react-router-dom';


const Navbar = () => {
    return (
<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <style jsx>
       {
           `
           
           `
       }
    </style>

  <div className="container-fluid">
    <Link to="/" className="navbar-brand fw-bold">Rick and Morty <span className="text-primary">Wiki </span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
      
      <div className="d-flex">
        <div className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
        
          <NavLink to="/" activeClassName="active" className="nav-link" >Characters</NavLink>
      
        
          <NavLink to="/episodes" className="nav-link">Episode</NavLink>
      
        
          <NavLink to="/location" className="nav-link">Location</NavLink>
      
      </div>
      </div>
    </div>
  </div>
</nav>
    )
}

export default Navbar
