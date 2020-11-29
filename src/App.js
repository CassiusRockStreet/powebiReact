// import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'jquery/dist/jquery.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.js'

import Login from './includes/login';

class App extends React.Component {
  render(){
      return (
          <>
          <Login/>
          </>
        );
        
  }
}
export default App;
