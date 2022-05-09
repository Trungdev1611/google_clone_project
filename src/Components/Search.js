import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useResultContext } from '../Context/ContextResult'
const Search = () => {
    const [valueInput, setValueInput] = useState("")
    let { searchInput, setSearchInput } = useResultContext()
    console.log('searchinput', searchInput)
    return (
        <div>
            <input type="text" value={valueInput} onChange={(e) => setValueInput(e.target.value)} />
            <button type="button" onClick={() => setSearchInput(valueInput)}>SendData</button>
            <div className='router-link'>
                <NavLink to="search" >All</NavLink>
                <NavLink to="news">News</NavLink>
                <NavLink to="image">Image</NavLink>
                <NavLink to="video">Video</NavLink>
            </div>

        </div>
    )
}

export default Search