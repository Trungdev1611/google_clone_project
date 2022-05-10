import React from 'react'
import { NavLink } from 'react-router-dom'
import { useResultContext } from '../Context/ContextResult'
import InputSearch from './InputSearch'
const Search = () => {

    let { searchInput, setSearchInput, inputHome } = useResultContext()
    console.log('searchinput', searchInput)
    return (
        <div>
            {/* <input type="text" value={inputHome} onChange={(e) => setInputHome(e.target.value)} /> */}
            <div className='search-result'>
                <div className="logo">
                    <img src="https://www.google.com.vn/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="logo" />
                </div>
                <InputSearch style1={"50%"} />
                <div className="signup-btn"><button>Đăng nhập</button></div>
            </div>

            <button type="button" onClick={() => setSearchInput(inputHome)}>SendData</button>
            <div className='router-link'>
                <NavLink to="/search" >All</NavLink>
                <NavLink to="/news">News</NavLink>
                <NavLink to="/image">Image</NavLink>
                <NavLink to="/video">Video</NavLink>
            </div>

        </div>
    )
}

export default Search