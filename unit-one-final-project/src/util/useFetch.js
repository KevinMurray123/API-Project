import React, { useState, useEffect } from 'react'
const API_ENDPOINT = `https://api.publicapis.org/`

export const useFetch = (searchQuery) => {
    const [loading, setLoading] = useState(true);
    const [apis, setApis] = useState(null)


    const fetchAPI = async (url) => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            if(data.entries === null){
                
            }else{
                setApis(data.entries);
            }
            setLoading(false)

        } catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        console.log(`${API_ENDPOINT}${searchQuery}`);
        fetchAPI(`${API_ENDPOINT}${searchQuery}`)
    }, [searchQuery])

    return {loading, apis};
}