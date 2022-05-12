import React from 'react'
import { useResultContext } from '../Context/ContextResult';

import { GoSearch } from 'react-icons/go';

const InputSearch = (props) => {
    let { inputHome, setInputHome, handleSearch } = useResultContext()
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