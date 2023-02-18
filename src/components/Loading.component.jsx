import React from 'react'
import ReactLoading from 'react-loading'

const Loading = () => {
    return (
        <div className="loader">
            <ReactLoading type={'bars'} color={'white'} height={400} width={200} />
        </div>
    )
}

export default Loading