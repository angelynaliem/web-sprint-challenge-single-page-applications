import React from 'react';
import { Link } from 'react-router-dom';


const Homepage = () => {

    return (
        <div className = "homepage">
        <Link to="/pizza">
            <button>Order Pizza!</button>
        </Link>
        </div>
    )
    

}

export default Homepage;