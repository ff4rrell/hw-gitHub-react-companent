import React from 'react';
import UrlLink from './companet/UrlLink'
import UlrMainIntroHeader from './UlrMainIntroHeader';
import MainLinkTest from './MainLinkTest';


const ulrMainIntroHeader = UlrMainIntroHeader;
     


const MainIntro = () => (
    <div className='main__intro'>
        <ul>
            <li>    <UrlLink url='#' urlName='UserName' className='main_intro__link'/>   </li>
            /
            <li>    <UrlLink url='#' urlName='GitProjeactName' className='main_intro__link' /></li>
        </ul>
        <MainLinkTest/>
    </div>
);

export default MainIntro;