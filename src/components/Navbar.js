import React from 'react';
import { NavLink } from 'react-router-dom'; 


const Navbar = (props) =>   {
    return(
        <ul>
            <li><NavLink onClick={props.setErrorStateFalse} exact to='/' activeClassName='active'>Home</NavLink></li>
            <li><NavLink onClick={props.setErrorStateTrue} to='/contact' activeClassName='active'>Contact</NavLink></li>
        </ul>
    )
}

export default Navbar;
