import { Link } from 'gatsby';
import React from 'react';

const PageNotFound = () => {
    return (
        <React.Fragment>
            <h1>Page Not Found</h1>
            <Link to='/'>Home Page</Link>
        </React.Fragment>
    )   
}

export default PageNotFound;