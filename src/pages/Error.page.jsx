import React from 'react'
import { Link } from 'react-router-dom'

const Error = ({msg}) => {
    return (
        <div>
            <h1>{msg}</h1>
            <Link>
                <button>
                    Go back to Home
                </button>
            </Link>
        </div>
    )
}

export default Error