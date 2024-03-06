import React from "react";
import { useState, useEffect } from "react";
import "../styles/recherche.css"

function Search() {

    const [datas, setDatas] = useState ([]); 
    const [searchTerm, setSearchTerm] = useState ([]); 

    useEffect (() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setDatas(json))
    }, [])

    const handleSearchTerm = (e) => {
        let value = e.target.value;
        value.length > 1 && setSearchTerm(value); 
    };

    return (
        <div>
        <div className="search">
                <input 
                    type="text" 
                    name="SearchBar" 
                    id="searchBar"  
                    placeholder="Rechercher" 
                    onChange={handleSearchTerm}
                    />
        </div>
        <div className="searchResults">
            {datas
            .filter((val) => {
                return val.title.includes(searchTerm);
            })            
            .map((val) => {
            return (
            <div className="searchResult" key={val.id}>
                {val.title}
                </div>
            );
        })}
        </div>
        </div>
    )
}

export default Search;