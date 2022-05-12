import React from 'react';
import { useResultContext } from '../Context/ContextResult';
import "../scss/Home.scss";
import InputSearch from './InputSearch';

const Home = () => {
    let { handleSearch } = useResultContext()
    return (
        <div>
            <div className="body-home">
                <div className="logo">
                    <img src="https://www.google.com.vn/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="logo" />
                </div>
                <div className="search">

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


