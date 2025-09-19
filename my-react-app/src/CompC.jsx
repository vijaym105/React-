import React, { useContext } from 'react';
import { UserContext } from './CompA';

function CompC() {
    const user = useContext(UserContext);

    return (
        <div  className='box'>
            <h1>Bye {user} from CompC!</h1>

        </div>
    );
}

export default CompC;