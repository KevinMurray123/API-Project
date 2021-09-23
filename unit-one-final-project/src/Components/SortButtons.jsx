import React, { useState } from 'react'
import { useApiContext } from '../util/useContext'
import { Link } from 'react-router-dom'

const SortButtons = () => {
    
    const {apis} = useApiContext()

    // const getRandomApi= () => {
    //     apis
    // }
    
    return (
        <div className='section'>
            <Link className='btn' to='/api'>Random API</Link>
        </div>
    )
}

export default SortButtons
