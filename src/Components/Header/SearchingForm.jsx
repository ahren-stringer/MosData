import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Header.css'

const SearchingForm=(props)=>{

    let searchInput=React.createRef();
    let searched='/all/';

    let onSearchChange=()=>{
        props.SearchChange(searchInput.current.value)
    }

    let Search=()=>{
        debugger
        searched=searched+'4'
        // props.names.indexOf(props.newSearchText)
        // console.log(searched)
    }

   return (<div>
       <input type="text" value={props.newSearchText} onChange={onSearchChange} ref={searchInput}/>
       <button onClick={Search}>
           <NavLink to={searched}>
           Найти
           </NavLink>
        </button>
   </div>)
}

export default SearchingForm;