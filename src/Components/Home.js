import React from 'react';
import { useResultContext } from '../Context/ContextResult';
import { useNavigate } from 'react-router-dom';
// import { GoSearch } from 'react-icons/go';
import "../scss/Home.scss";
import InputSearch from './InputSearch';
const Home = () => {
    let { setSearchInput, inputHome } = useResultContext()
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
            <div className="body-home">
                <div className="logo">
                    <img src="https://www.google.com.vn/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="logo" />
                </div>
                <div className="search">
                    {/* <div className="search-input">
                        <GoSearch className='iconsearch'
                            onClick={handleSearch}
                        />
                        <input type="text" value={inputHome}
                            onChange={(e) => setInputHome(e.target.value)}
                            onKeyPress={(e) => { if (e.key === 'Enter') { handleSearch() } }}
                        />
                    </div> */}
                    <InputSearch />

                    <div className="buttons">
                        <button className='btn btn-search' onClick={handleSearch}>Tìm trên Google</button>
                        <button className='btn btn-search' onClick={handleSearch}>Xem trang đầu tiên tìm được</button>
                    </div>
                    <p>Google có các thứ tiếng: <a href="/#">English Français 繁體中文</a></p>
                </div>
            </div>


            <div className="footer">
                <div className="footer-left">
                    <div><a href="/#">Giới thiệu</a></div>
                    <div><a href="/#">Quảng cáo</a></div>
                    <div><a href="/#">Doanh nghiệp</a></div>
                    <div><a href="/#">Tìm kiếm</a></div>
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
