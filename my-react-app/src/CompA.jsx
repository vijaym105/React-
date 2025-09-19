import React, { useState, createContext } from 'react';
import CompB from './CompB';
export const UserContext = createContext();

function CompA() {
    const [user, setUser] = useState("Vijay");
    return (
        <div className='box'>
             <h1>Hello from CompA {user}!</h1>
            <UserContext.Provider value = {user}>
            <CompB user ={user}/>
            </UserContext.Provider>
           
        </div>
    );
}

export default CompA;