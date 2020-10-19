import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'



function Header() {
  return ( <div className='counter'>
    <div>
      {localStorage.getItem("count")}
    </div>
    <NavLink to='/all'>All</NavLink>
    <NavLink to='/liked'>Liked</NavLink>
    </div>
  );
}

export default Header;