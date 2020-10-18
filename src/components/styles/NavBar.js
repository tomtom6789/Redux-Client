import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class NavBar extends Component {
    render() {
        return (
            <nav>
                <NavLink to="/">Home</NavLink>
                <ul>
                    <li><NavLink to='/laptops'>Laptops</NavLink></li>
                    <li><NavLink to='/laptops/new'>Create a Laptop</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default NavBar
