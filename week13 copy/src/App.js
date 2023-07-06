import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Styles from './Components/Styles.css'
import NavBar from './Components/NavBar'
import Form from './Components/Form'
import LogIn from './Components/log-in';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
      
        <div className="container">
        
        <LogIn/> 
        </div>
        <div className="form">
        <Form/>

        </div>
      
      <user-form/>
       
       
      </header>
    </div>
  );
}

export default App;
