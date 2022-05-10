import React from 'react'
import { createContext } from 'react'
import { useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'

export const ContextggSearch = createContext()

const ContextResult = (props) => {
    // let timeout = useRef()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchInput, setSearchInput] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [inputHome, setInputHome] = useState("")

    const url = "https://google-search3.p.rapidapi.com/api/v1"

    const location = useLocation() // info url
    let amountOfdata = 100

    useEffect(() => {
        if (searchInput.trim()) setLoading(true) // neu input co value va duoc submit thi loading 
        function fetchData(content, keyword) {
            let linkAPi = `${url}${keyword}/q=${content}`
            console.log(linkAPi)
            fetch(`${url}${keyword}/q=${content}&&num=${amountOfdata}`, {

                method: 'GET',
                headers: {
                    'X-User-Agent': 'desktop',
                    'X-Proxy-Location': 'EU',
                    'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                    'X-RapidAPI-Key': '37c1b1f305msh19bd0033ac267efp10c560jsnb408ff672597'
                }
            })
                .then(res => res.json())
                .then(data => {
                    setData(data)
                    setLoading(false)
                }
                )
                .catch(error => console.log(error, 'loi fetch roi'))
            // clear Timeout increase perfomance
            //void(0) la de so sanh undefined
            //timeout khoi tao tai useRef neu khac undefined thi cleare
            // if (timeout.current !== void (0)) clearTimeout(timeout.current)

        }
        if (["/search", "/image", "/video", "/news"].includes(location.pathname)) {

            if (searchInput.trim()) {  //if input not empty and button clicked
                //get data from API more time
                // timeout.current = setTimeout(function () {
                fetchData(searchInput, location.pathname)
                // console.log('re-render 2s')

                // }, 1000)
            }

        }



    }, [location.pathname, searchInput, amountOfdata])

    return (
        <ContextggSearch.Provider value={{ data, loading, searchInput, setSearchInput, currentPage, setCurrentPage, amountOfdata, inputHome, setInputHome }}>
            {props.children}
        </ContextggSearch.Provider>
    )
}
export const useResultContext = () => useContext(ContextggSearch)
export default ContextResult