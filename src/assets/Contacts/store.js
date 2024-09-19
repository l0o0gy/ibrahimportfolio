import React, { createContext, useContext, useState } from 'react';


const DataContext = createContext();

const data = [
    {
        id: 1,
    },
];

export const DataProvider = ({ children }) => {
    const [items] = useState(data);

    return (
        <DataContext.Provider value={items}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
