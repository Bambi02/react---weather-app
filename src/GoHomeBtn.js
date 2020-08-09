import React from 'react';
import { Link } from 'react-router-dom'

const GoHomeBtn = () => {

    return(
        <Link to={'/'} className="goHomeBtn" >
            <i className="fas fa-arrow-left"></i>
        </Link>
    )
}

export default GoHomeBtn