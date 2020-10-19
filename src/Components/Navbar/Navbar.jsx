import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
  const Liked=(name)=>{
    let counter=+localStorage.getItem('count');
    if (localStorage.getItem(name)){
      localStorage.removeItem(name)
      counter=counter-1
      localStorage.setItem('count',counter)
    }else{
      localStorage.setItem(name,name)
      counter=counter+1
      localStorage.setItem('count',counter)
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
            <div onClick={()=>{Liked(item.Cells.CommonName)}}>
              Добавить в избранное
            </div>
          </div>
        })
      }
    </div>
  );
}

export default Navbar;