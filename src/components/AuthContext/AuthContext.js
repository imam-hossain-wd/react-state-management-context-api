import React, { createContext, useState } from 'react';

export const authContext = createContext()


const AuthContext = ({children}) => {
    const [firstcount , setFirstCount] = useState(0)
    const [secondCount , setSecondCount] = useState(0)
    const [thirdCount , setThirdCount] = useState(0)
const person = {
    setFirstCount,
    setSecondCount,
    setThirdCount,
    firstcount,
    secondCount,
    thirdCount
    
}

    return (
        <authContext.Provider value={person}>
            {children}
            
        </authContext.Provider>
    );
};

export default AuthContext;