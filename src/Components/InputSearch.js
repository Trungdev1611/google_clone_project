import React from 'react'
import { useResultContext } from '../Context/ContextResult';
import { useNavigate } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';

const InputSearch = (props) => {
    let { setSearchInput, inputHome, setInputHome } = useResultContext()
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
        <div className="search-input" style={{ width: props.style1 }} >
            <GoSearch className='iconsearch'
                onClick={handleSearch}
            />
            <input type="text" value={inputHome}
                onChange={(e) => setInputHome(e.target.value)}
                onKeyPress={(e) => { if (e.key === 'Enter') { handleSearch() } }}
            />
        </div>
    )
}

export default InputSearch