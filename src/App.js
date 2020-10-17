import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../src/Components/Header/Header';
import Navbar from '../src/Components/Navbar/NavbarContainer';
import Info from '../src/Components/Info/InfoContainer';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className='Header'>
        <Header/>
      </div>
      <div className='Navbar'>
        <Navbar/>
      </div>
      <div className='Info'>
          <Route path='/info/:id' render={()=><Info/>}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
