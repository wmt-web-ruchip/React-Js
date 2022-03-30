import React from "react";
import { Link ,NavLink } from 'react-router-dom'

function Navbar() {
  return (
   
 <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'rgba(25,24,31)'}} >
    <div className="container py-3 px-md-5 px-2">
         <div>
        <a className="navbar-brand" href="#">
            <span className="fw-bold fs-4">Carator</span> <span className="fw-bold fs-4" style={{color:'#adadadb8'}}>Studio</span>
        </a>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto px-2 d-flex" style={{fontSize:'16px',fontWeight:'500'}}>
            <li className="nav-item px-3" >
            <Link className="nav-link " aria-current="page" to='/'>Home</Link>
            </li>
            <li className="nav-item px-3">
            <NavLink className="nav-link" to='/service'>Services</NavLink>
            </li>
             <li className="nav-item px-3">
            <NavLink className="nav-link" to='/about'>About</NavLink>
            </li>
             <li className="nav-item px-3">
            <NavLink className="nav-link" to=''>Work</NavLink>
            </li>
             <li className="nav-item px-3">
            <NavLink className="nav-link" to=''>Case study</NavLink>
            </li>
        </ul>
       
       <div>
           {/* <button type="button" className="btn btn-light rounded-pill px-4 py-2 fw-normal">Let's talk</button> */}
                <a type="button" className="btn rounded-pill hover1 fw-bold" style={{padding:'10px 2rem',fontSize:'16px'}}>Let's talk</a>
       </div>
        </div>
    </div>
</nav>
   
  )
}

export default Navbar