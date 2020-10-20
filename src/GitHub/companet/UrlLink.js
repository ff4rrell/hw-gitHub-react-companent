import React from 'react';

const UrlLink = (props) => (
    <div>
        <a href={props.url} className={props.className} > {props.urlName} </a>
    </div>
)

export default UrlLink;