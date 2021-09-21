import React, { useState } from 'react'
import { useApiContext } from '../util/useContext'

const SearchBar = () => {
    const {query, setQuery} = useApiContext();
    return (
        <div className='search-bar'>
            <form onSubmit = {(e) => e.preventDefault()} className="search-form">
            <h2>Search APIs</h2>
            <input type="text" 
            className="form-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}/>
            </form>
        </div>
    )
}

export default SearchBar
