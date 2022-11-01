import {createContext, useEffect, useState} from "react";
import useLocalStorage from 'use-local-storage'

const Context = createContext();

export const ContextProvider = ({children}) => {
    const [lists, setLists] = useState(JSON.parse(localStorage.getItem('lists')) || [])
    
    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(lists))
    }, [lists])

    const value = {lists, setLists};

    return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Context;