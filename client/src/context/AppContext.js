import React, { createContext, useState } from 'react';

export const AppContext = createContext({})


export const AppContextProvider = props => {
    const [selectedRecipe, setSelectedRecipe] = useState({});
    return (
        <AppContext.Provider value={{ selectedRecipe, setSelectedRecipe }}>
            {props.children}
        </AppContext.Provider>
    )
}


