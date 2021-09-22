import React, { useState } from 'react'
import { useApiContext } from '../util/useContext'

const SortButtons = () => {
    
    const {apis} = useApiContext()

    const getRandomApi= () => {
        apis
    }
    
    return (
        <div className='section'>
            <button className='btn'>Random API</button>

        </div>
    )
}

export default SortButtons
