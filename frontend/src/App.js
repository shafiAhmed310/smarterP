import React, { Fragment } from 'react';
import {BrowserRouter as Router ,Route } from 'react-router-dom';
import './App.css';

// import CreatePost from './Components/CreatePost'
import HooksPost from './Components/HooksPost'
import FetchPost from './Components/FetchPost';



function App() {
  return (
    <Fragment>
      <div className="mainBlock">

        <div className="HooksBlock">
       
        <HooksPost />
        </div>
        <div className="postBlock">
        <FetchPost />
        </div>
      </div>

    
    </Fragment>
    
    
    
  )
}

export default App;
