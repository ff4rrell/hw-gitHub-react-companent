import React from 'react';
import Button from './companet/Button';

const MainHeader = () => (
    <div className='main__header'>
        <h1>Learn Git and GitHub without any code!</h1>
        <h2>Using the Hello World guide, you'll a branch, write comments, and open a pull request</h2>
        
        <Button className='main__green__button' buttonName='Read the guide'/>
    </div>
)

export default MainHeader;