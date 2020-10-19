import React from 'react'
import { NavLink } from 'react-router-dom';

// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//     root: {
//       color: 'white',
//     },
//   });


export const NavBar = () => {
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


export default NavBar
