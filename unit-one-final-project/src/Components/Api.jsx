import React, { useState } from 'react'
import { useApiContext } from '../util/useContext'
import { useFetch } from '../util/useFetch'

const Api = () => {

    const {apis, loading} = useFetch(`random?`)

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
                        <a href={link}><h1>{title}</h1></a>
                        <h3>{desc}</h3>
                        <h3>Auth: {auth == "" ? "none" : auth }</h3>
                        <h3>HTTPS: {https ? 'Yes' : 'No'}</h3>
                        <h3>Cors: {cors}</h3>
                        <h3>Category: {category}</h3>
                    </div>
                )
            })
            }
        </section>
    )
}

export default Api
