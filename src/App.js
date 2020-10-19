import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../src/Components/Header/Header';
import Navbar from '../src/Components/Navbar/NavbarContainer';
import Info from '../src/Components/Info/InfoContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import All from './Components/All/All';
import Liked from './Components/Liked/Liked';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className='Header'>
        <Header/>
      </div>
      <div className='content'>
        <Route path='/all/:id?' render={()=><All/>}/>
        <Route path='/liked/:id?' render={()=><Liked/>}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
