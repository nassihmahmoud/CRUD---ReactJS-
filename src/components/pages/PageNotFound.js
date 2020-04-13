import React from 'react'
import { Link } from 'react-router-dom'
function PageNotFound() {
    return (
        <div>
            <h3>Page Not FOUND</h3>
            <Link to="/">Back to Home</Link>
        </div>
    )
}

export default PageNotFound;