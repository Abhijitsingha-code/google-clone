import React, {useContext, createContext, useState} from "react";

const ResultContext = createContext();
const BaseUrl = 'https://google-search72.p.rapidapi.com'

export const ResultContextProvider = ({children}) =>{
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('elon musk')

    const getResult = async (type)=>{
            setIsLoading(true);
            const res = await fetch(`${BaseUrl}${type}`, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                    'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
                }
            })

            const data = await res.json()
            setResults(data)
            setIsLoading(false)
    }

    return (
        <ResultContext.Provider value={{ getResult, results, isLoading, searchTerm, setSearchTerm}}>
            {children}
        </ResultContext.Provider>
    )
}


export const useResultContext = () => useContext(ResultContext)