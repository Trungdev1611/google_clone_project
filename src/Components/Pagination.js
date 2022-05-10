import React from 'react'
import { useResultContext } from '../Context/ContextResult'
const Pagination = () => {

    let arrPagination = []

    let quatityDataainpages = 10  // quatity data in one pagination
    let { currentPage, setCurrentPage, amountOfdata } = useResultContext()

    let numberPages = Math.ceil(amountOfdata / quatityDataainpages)
    for (let i = 1; i <= numberPages; i++) {
        arrPagination.push(i)
    }
    return (
        <div className='footer-result'>
            <div className='footer-logo'><span>G</span><span>o</span><span>ooooooooo</span><span>g</span><span>l</span><span>e</span></div>
            <div className='pagination' >
                {arrPagination.map((ele) => {
                    return <span key={ele}
                        className={currentPage === ele ? "paginate-item activepage" : "paginate-item"}
                        onClick={() => setCurrentPage(ele)}
                    >{ele}</span>
                })}
            </div>
        </div>

    )
}

export default Pagination