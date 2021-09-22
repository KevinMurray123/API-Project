import React from 'react'
import { useApiContext } from '../util/useContext'

const Apis = () => {
    const {apis, loading} = useApiContext();
    
    

    if (loading) {
        return <div className="loading">Loading!</div>
    }
    return (
        <section className="apis">
            {apis.count == 0 ? 'no results' : 
            apis.map((api) => {
                const { API: title, Description: desc, Auth: auth, Link: link, HTTPS: https, Cors: cors, Category: category} = api;
                return (
                    <div className="api container">
                        <a href={link}><h2>{title}</h2></a>
                        <h4>{desc}</h4>
                        <h4>Auth: {auth == "" ? "none" : auth }</h4>
                        <h4>HTTPS: {https ? 'Yes' : 'No'}</h4>
                        <h4>Cors: {cors}</h4>
                        <h4>Category: {category}</h4>
                    </div>
                )
            })
            }
        </section>
    )
    
}

export default Apis
