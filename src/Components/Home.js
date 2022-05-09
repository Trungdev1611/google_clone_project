import React, { useState } from 'react'
import { useResultContext } from '../Context/ContextResult'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const [inputHome, setInputHome] = useState("")
    let { setSearchInput } = useResultContext()
    const navigate = useNavigate()
    function handleSearch() {
        if (inputHome.trim())
            setSearchInput(inputHome)
        //chuyen huong trang nguoi dung su dung hooks usenavigate
        navigate("/search"
            // , { replace: true }
        )
        // replace true will not save info page history in browser so we can't back page history

    }
    return (
        <div>
            <div className="logo">
                <img src="https://www.google.com.vn/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="logo" />
            </div>
            <div className="search">
                <input type="text" value={inputHome} onChange={(e) => setInputHome(e.target.value)} />
                <div className="buttons">
                    <button className='btn-search' onClick={handleSearch}>Tìm trên Google</button>
                    <button className='btn-search'>Xem trang đầu tiên tìm được</button>
                </div>
                <p>Google có các thứ tiếng: English Français 繁體中文</p>
            </div>

            <div className="footer">
                <div className="footer-left">
                    <div><a href="/#">Giới thiệu</a></div>
                    <div><a href="/#">Quảng cáo</a></div>
                    <div><a href="/#">Doanh nghiệp</a></div>
                    <div><a href="/#">Cách hoạt động tìm kiếm</a></div>
                </div>
                <div className="footer-right">
                    <div><a href="/#">Bảo mật</a></div>
                    <div><a href="/#">Điều khoản</a></div>
                    <div><a href="/#">Cài đặt</a></div>
                </div>
            </div>
        </div>
    )
}

export default Home




// const history = useNavigate();

// function handleSubmit(e) {
//     e.preventDefault();

// history('/home');
