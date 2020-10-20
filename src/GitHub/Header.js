import React from 'react';
import Button from './companet/Button';
import UrlLink from './companet/UrlLink'


const Header = () => (
    <header className='header'>
    
        <Button className='logo_button' buttonName='GitHub'/>
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