import React, { createContext, useState, useEffect } from "react";
import api from "../Resources/api";
export const SearchContext = createContext({});

function SearchProvider({ children }) {

    const [search, setSearch] = useState('');
    const [user, setUser] = useState({});

    useEffect(() => {

        api(search,setUser);

    }, [search]);

    
    return (
        <SearchContext.Provider value={{ setSearch, user }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider;