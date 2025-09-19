import React from 'react';
import CompC from './CompC';

function CompB(props) {
    return (
        <div className='box'> 
            <h1>Hello from CompB!</h1>
            <CompC user = {props.user}/>
        </div>
    );
}

export default CompB;