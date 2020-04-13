import React from 'react'
import PropTypes from 'prop-types'
import './navbar.css'
import { Link } from "react-router-dom";
const Navbar = (props) => {
    const {title} = props;
    return (
        <div>
           <nav className="navbar navbar-expand-sm navbar-dark bg-success">
               <Link className="navbar-brand" to="/">{title}</Link>
                   <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                       <li className="nav-item active">
                           < Link className="nav-link" to="/">Home</Link>
                       </li>
                       <li className="nav-item active">
                           < Link className="nav-link" to="/contact/add">Ajouter Contact</Link>
                       </li> 
                       <li className="nav-item active">
                           < Link className="nav-link" to="/about">About</Link>
                       </li> 
                  </ul>  
            
           </nav>
        </div>
    )
}
Navbar.defaultProps = {
    title : "la list vide"
}
Navbar.propTypes ={
    title  : PropTypes.string.isRequired
}
export default Navbar;
