import React, { useState } from 'react'

const SortButtons = () => {
    return (
        <div className='sort-buttons section'>
            <button className='btn'>Title (Z-A)</button>
            <button className='btn'>Title (A-Z)</button>
            <button className='btn'>Auth</button>
            <button className='btn'>Category</button>
        </div>
    )
}

export default SortButtons
