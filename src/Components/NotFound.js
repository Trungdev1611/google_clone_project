import React from 'react'
import { useResultContext } from '../Context/ContextResult'
const NotFound = () => {
    const { searchInput } = useResultContext()

    return (
        <div className='search-result-item not-found'>
            {<div >Không tìm thấy <strong>${searchInput} </strong>trong bất kì tài liệu nào</div>}
            <div style={{ margin: '10px 0' }}>Đề xuất</div>
            <ul>
                <li>Xin bạn chắc chắn rằng tất cả các từ đều đúng chính tả.</li>
                <li>Xin bạn chắc chắn rằng tất cả các từ đều đúng chính tả.</li>
                <li>Xin bạn chắc chắn rằng tất cả các từ đều đúng chính tả.</li>
            </ul>

        </div>
    )
}

export default NotFound