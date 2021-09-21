import React from 'react'
import SortButtons from '../Components/SortButtons'
import SearchBar from '../Components/SearchBar'
import Apis from '../Components/Apis'

const Home = () => {
    return (
        <div className="home">
            <SortButtons />
            <SearchBar />
            <Apis /> 
        </div>
    )
}

export default Home
