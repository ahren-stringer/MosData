import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
  return (
    <div>
      {
        props.navData.map((item,index, array) => {
           return <NavLink to={`/info/${index}`}>
               <div>
                {item.Cells.CommonName}
            </div>
           </NavLink> 
        })
      }
    </div>
  );
}

export default Navbar;