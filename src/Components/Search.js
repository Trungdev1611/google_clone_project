import React from 'react'
import { NavLink } from 'react-router-dom'
import { useResultContext } from '../Context/ContextResult'
import { GoSearch } from 'react-icons/go';

import "../scss/Search.scss"
const Search = () => {
    let router = [
        { to: "/search", value: "Tất cả" },
        { to: "/news", value: "Tin tức" },
        { to: "/image", value: "Hình ảnh" },
        { to: "/add", value: "Thêm" }]
    let { searchInput, inputHome, setInputHome, handleSearch } = useResultContext()
    console.log('searchinput', searchInput)
    return (
        <div>
            <div className="search-header">
                <div className='search-header__logo'>
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="logo google" />
                </div>
                <div className="search-header__input">
                    <div className='iconsearch' onClick={handleSearch}>
                        <GoSearch className='iconsearch-item'

                        />
                    </div>
                    {inputHome ? <div className="search-input-close"
                        onClick={() => setInputHome("")}
                    >X</div> : ''}

                    <input type="text" value={inputHome}
                        onChange={(e) => setInputHome(e.target.value)}
                        onKeyPress={(e) => { if (e.key === 'Enter') { handleSearch() } }}
                    />
                </div>
                <div className="search-header__button">
                    <button type="button" >Đăng nhập</button>

                </div>
            </div>


            <div className='router-link'>
                {router.map(({ to, value }, index) => {
                    return (<div key={index}>
                        <NavLink to={to}
                            style={({ isActive }) => ({ color: isActive ? "#79a4f0" : "#3c4043" })}
                        >{value}</NavLink>
                    </div>)
                })}

            </div>

        </div>
    )
}

export default Search