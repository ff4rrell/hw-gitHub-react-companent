import React from 'react';
import Button from './companet/Button';
import UrlLink from './companet/UrlLink'


const Header = () => (
    <header className='header'>
    
        <Button className='logo_button' buttonName='GitHub'/>
        <input type='text' id='logo__input'/><br/>
        <ul>
            <li ><UrlLink url='#' urlName='Pull Requests' className='header__link'/> </li> 
            <li ><UrlLink url='#' urlName='Isues' className='header__link'/></li>
            <li ><UrlLink url='#' urlName='Marketlace' className='header__link'/></li>
            <li> <UrlLink url='#' urlName='Explore' className='header__link'/></li>
        </ul>
    </header>
)
export default Header;