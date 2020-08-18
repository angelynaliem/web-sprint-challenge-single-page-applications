import React from 'react';
import { Link, useLocation} from 'react-router-dom';



const SubmitPage = () => {

    const location = useLocation();

    const summary = location.post;
    console.log("Summary", summary)

    return (
        <div className = "homepage">
        <h3>Your order summary</h3>
        {/* <p>{summary}</p> */}
             <pre>{JSON.stringify(summary, null, 2)}</pre> 
   
     

        <Link to="/">
            <button>Home</button>
        </Link>

        </div>
    )
    

}

export default SubmitPage;