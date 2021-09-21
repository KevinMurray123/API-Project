import React from 'react'
import { useApiContext } from '../util/useContext'

const Apis = () => {
    const {apis, loading} = useApiContext();
    
    if (loading) {
        return <div className="loading">Loading!</div>
    }
    return (
        <section className="apis">
            {apis.map((api) => {
                const { API: title, Description: desc, Auth: auth} = api;
                return (
                    <div className="api">
                        <h2>{title}</h2>
                        <h4>{desc}</h4>
                        <h4>Auth: {auth == "" ? "none" : auth }</h4>
                    </div>
                )})}
            
        </section>
    )
    
}

export default Apis
