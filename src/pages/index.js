import { Link } from 'gatsby';
import React from 'react';

const HomePage = () => {

   function onButtonClick() {
      console.log('Hello');
   }

   return (
      <React.Fragment>
         
         <h1>Home Page</h1> 
         <p>hi</p>
         <button onClick={onButtonClick}>Click Me!</button>
         <a href='/about'>Go to about page</a>
         <Link to= '/about'>Link to about page</Link>

      </React.Fragment>
   )
   
}

export default HomePage;