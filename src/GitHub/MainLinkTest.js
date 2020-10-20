import React from 'react';
import UlrMainIntroHeader from './UlrMainIntroHeader';
import UrlLink from './companet/UrlLink';

const Test = (props) => (
    <li>
            <UrlLink url={props.url} urlName={props.name}/>
    </li>
)

const ulrMainIntroHeader = UlrMainIntroHeader;

const MainLinkTest = () => (
    <ul>
        {ulrMainIntroHeader.map( it => {
            return <Test url= {it.url} name={it.name}/>
        })}
        
    </ul>
)

export default MainLinkTest;