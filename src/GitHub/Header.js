import React from 'react';
import UrlLink from './companet/UrlLink'

const Header = () => (
    <header className='header'>
        <button className='logo__button' >GitHub</button>
        <input type='text' id='logo__input'/><br/>
        <ul>
            <li ><UrlLink url='#' urlName='Pull Requests'/> </li> &nbsp;
            <li ><UrlLink url='#' urlName='Isues'/></li>&nbsp; 
            <li ><UrlLink url='#' urlName='Marketlace'/></li>&nbsp;
            <li> <UrlLink url='#' urlName='Explore'/></li>&nbsp;  
        </ul>
    </header>
)
export default Header;