import React from 'react';

const UrlLink = (props) => (
    <div>
        <a href={props.url} className='header__link' > {props.urlName} </a>
    </div>
)

export default UrlLink;