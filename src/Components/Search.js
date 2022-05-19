import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useResultContext } from '../Context/ContextResult'
import { GoSearch } from 'react-icons/go';

import "../scss/Search.scss"
const Search = () => {
    let router = [
        { to: "/search", value: "Tất cả" },
        { to: "/image", value: "Hình ảnh" },
        { to: "/news", value: "Tin tức" },
        { to: "/video", value: "Video" },
        { to: "/add", value: "Thêm" }]

    let { inputHome, setInputHome, handleSearch } = useResultContext()
    let navigate = useNavigate()

    function handleScroll() {
        let scroll = window.pageYOffset

        if (scroll > 120) {
            document.querySelector(".search-header").style.position = "fixed"
            document.querySelector(".search-header").style.boxShadow = " 0 1px 6px 0 rgba(32,33, 36,  0.28)"
            document.querySelector(".router-link").style.paddingTop = "50px"
        }
        else {
            document.querySelector(".search-header").style.position = "static"
            document.querySelector(".search-header").style.boxShadow = "none"
            document.querySelector(".router-link").style.paddingTop = "0px"
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })
    function redirectHome() {
        setInputHome('')
        return navigate("/")
    }
    return (
        <div className="test">
            <div className="search-header">
                <div className='search-header__logo' onClick={redirectHome}>
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