import React, { useState, useContext} from 'react'
import { useFetch } from './useFetch'


const apiContext = React.createContext();

export const ApiProvider = ({children}) => {
    const [query, setQuery] = useState('');
    const {apis , loading} = useFetch(`entries?title=${query}&`);
    
    return (<apiContext.Provider value={{query, setQuery, loading, apis}}>
        {children}
    </apiContext.Provider>)
}
    
export const useApiContext = () => {
    return useContext(apiContext);
}