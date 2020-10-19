import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from '../All.module.css'

function Navbar(props) {

  let [follow, followFlag]=useState(false)

  const Liked=(name,index)=>{
    let counter=+localStorage.getItem('count');
    if (localStorage.getItem(name)){
      localStorage.removeItem(name)
      counter=counter-1
      localStorage.setItem('count',counter)
      followFlag(false)
    }else{
      localStorage.setItem(name,index)
      counter=counter+1
      localStorage.setItem('count',counter)
      followFlag(true)
    }
    console.log(localStorage)
  }

  return (
    <div>
      {
        props.navData.map((item, index, array) => {
          return <div>
            <NavLink to={`/all/${index}`}>
              <div>
                {item.Cells.CommonName}
              </div>
            </NavLink>
            <div className={s.liked} onClick={()=>{Liked(item.Cells.CommonName,index)}}>
              Добавить в избранное {
               !!localStorage.getItem(item.Cells.CommonName)&&<span>+</span>
              }
            </div>
          </div>
        })
      }
    </div>
  );
}

export default Navbar;