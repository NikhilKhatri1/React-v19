import React, { createContext, useState } from 'react'
import NewMain from '../MainData/NewMain';

export const ContextName = createContext();

const ChangeNameContext = ({ children }) => {
    const [theme, setTheme] = useState("light");
    return (
        <ContextName.Provider value={{ theme, setTheme }}>
            {children}
        </ContextName.Provider>
    )
}

export default ChangeNameContext