// import React, {Component} from 'react';
import React from 'react'
import { NavLink } from 'react-router-dom';
// import {Navbar, Nav} from 'react-bootstrap';



const link = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    textDecoration: "none",
    color: "black",
}
export const Navigation = () => {
        return (
            <nav>
                <NavLink to="/" exact style={link} activeStyle={{ background: "tan" }}>Home</NavLink>
                <NavLink to="/about" exact style={link} activeStyle={{ background: "tan" }}>About</NavLink>
                <NavLink to='/laptops'  exact style={link} activeStyle={{ background: "tan" }}>Laptops</NavLink>
                <NavLink to='/laptops/new'  exact style={link} activeStyle={{ background: "tan" }}>Create a Laptop</NavLink> 
            </nav>
        )
    }



// export class Navigation extends Component {
//     render() {
//          return (
//             <Navbar bg="dark" expand="lg" >
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//             <Nav>
//             <NavLink className="d-inline p-2 bg-dark text-white" to="/" >Home</NavLink>
//             <NavLink className="d-inline p-2 bg-dark text-white" to="/about" >About</NavLink>
//             <NavLink className="d-inline p-2 bg-dark text-white" to='/laptops'  >Laptops</NavLink>
//             <NavLink className="d-inline p-2 bg-dark text-white" to='/laptops/new'  >Create a Laptop</NavLink> 
//             </Nav>
//             </Navbar.Collapse>
//             </Navbar>
//          )
//     }
// }
export default Navigation;
