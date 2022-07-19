import React, {createContext, useState} from "react";

export const SearchContext = createContext({});

function SearchProvider({children}){

    const [user, setUser] = useState({}); 
    
    function search(username){
        fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(data => {
            const {login, avatar_url, html_url, company, blog, location, repos_url} = data;

            const user = {
                login: login, 
                avatar_url: avatar_url, 
                html_url: html_url, 
                company: company, 
                blog: blog, 
                location: location, 
                repos_url: repos_url
            };

            setUser(user);
        })
    }

    return(
        <SearchContext.Provider>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider;