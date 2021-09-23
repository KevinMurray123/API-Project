import React from 'react'
import { Link } from 'react-router-dom';
import Api from '../Components/Api';

const SingleAPI = () => {
    return (
        <div className='section'>
            <Link className='btn' to='/'>Home</Link>
            <Link className='btn' to='/api'>Random API</Link>
            <Api />
        </div>
    )
}

export default SingleAPI
