
import React from 'react'
import { NavLink } from 'react-router-dom'


export const LaptopCard = (props) => <li><NavLink to={`/laptops/${props.id}`}>{props.laptop.name}</NavLink><button onClick={props.deleteLaptop} id={props.id}>X</button></li>;
    

export default LaptopCard