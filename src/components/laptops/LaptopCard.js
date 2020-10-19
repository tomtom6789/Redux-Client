
import React from 'react'
import { NavLink } from 'react-router-dom'

export default ({laptop: {name, id} }) => <li><NavLink to={`/laptops/${id}`}>{name}</NavLink></li>;

