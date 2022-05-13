import React from 'react'
import { createContext } from 'react'
import { useState, useEffect, useContext, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export const ContextggSearch = createContext()

const ContextResult = (props) => {
    const navigate = useNavigate()
    let timeout = useRef()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchInput, setSearchInput] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [inputHome, setInputHome] = useState("")

    const url = "https://google-search3.p.rapidapi.com/api/v1"
    const url2 = 'https://youtube-search-results.p.rapidapi.com/youtube-search'
    const location = useLocation() // info url
    let amountOfdata = 100

    function handleSearch() {
        if (inputHome.trim())
            setSearchInput(inputHome)
        //chuyen huong trang nguoi dung su dung hooks usenavigate
        navigate("/search"
            // , { replace: true }
        )
        // replace true will not save info page history in browser so we can't back page history


    }
    useEffect(() => {
        if (searchInput.trim()) setLoading(true) // neu input co value va duoc submit thi loading 
        function fetchData(content, keyword, url, header) {
            console.log('keyword', keyword)
            let linkAPi
            if (keyword === '/video') {
                linkAPi = `/?q=${content}` //link APi tuong ung voi url2
            }
            else {
                linkAPi = `${keyword}/q=${content}`//link APi tuong ung voi url1
            }

            console.log(linkAPi)
            fetch(`${url}${linkAPi}&&num=${amountOfdata}`, {

                method: 'GET',
                headers: header
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
            if (timeout.current !== void (0)) clearTimeout(timeout.current)

        }
        if (["/search", "/image", "/news"].includes(location.pathname)) {

            if (searchInput.trim()) {  //if input not empty and button clicked
                //get data from API more time
                timeout.current = setTimeout(function () {
                    // fetchData(searchInput, location.pathname, url, {
                    //     'X-User-Agent': 'desktop',
                    //     'X-Proxy-Location': 'EU',
                    //     'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                    //     'X-RapidAPI-Key': '37c1b1f305msh19bd0033ac267efp10c560jsnb408ff672597'
                    // })
                    // console.log('re-render 200ms')

                }, 200)
            }

        }

        if (location.pathname === "/video") {
            fetchData(searchInput, location.pathname, url2, {
                'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com',
                'X-RapidAPI-Key': '37c1b1f305msh19bd0033ac267efp10c560jsnb408ff672597'
            })

        }


    }, [location.pathname, searchInput, amountOfdata])

    return (
        <ContextggSearch.Provider value={{ data, loading, searchInput, setSearchInput, currentPage, setCurrentPage, amountOfdata, inputHome, setInputHome, handleSearch }}>
            {props.children}
        </ContextggSearch.Provider>
    )
}
export const useResultContext = () => useContext(ContextggSearch)
export default ContextResult