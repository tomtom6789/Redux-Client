import React from 'react'
import { NavLink } from 'react-router-dom';


const link = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    textDecoration: "none",
    color: "black",
    
    
}
export const NavBar = () => {
        return (
            <nav>
                <NavLink to="/" exact style={link} activeStyle={{ background: "tan" }}>Home</NavLink>
                <NavLink to="/about" exact style={link} activeStyle={{ background: "tan" }}>About</NavLink>
                <ul>
               <li><NavLink to='/laptops'  exact style={link} activeStyle={{ background: "tan" }}>Laptops</NavLink></li>
               <br></br>
               <li><NavLink to='/laptops/new'  exact style={link} activeStyle={{ background: "tan" }}>Create a Laptop</NavLink></li>

                </ul>
            </nav>
        )
    }


export default NavBar
