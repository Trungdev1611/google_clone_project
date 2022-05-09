import React from 'react'
import { InfinitySpin } from 'react-loader-spinner';
const Loading = () => {
    return (
        <div className='loading'>
            <InfinitySpin color="blue" />
        </div>
    )
}

export default Loading