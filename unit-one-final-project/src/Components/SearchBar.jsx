import React, { useState } from 'react'

const SearchBar = () => {
    return (
        <div className='search-bar'>
            <form onSubmit = {(e) => e.preventDefault()} className="search-form">
            <h2>Search APIs</h2>
            <input type="text" 
            className="form-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}/>
            {error.show && <div className="error">
                {error.msg}    
            </div>}
        </form>
        </div>
    )
}

export default SearchBar
