import React from 'react';
import Navbar from './Navbar';
import * as axios from 'axios';
import {setNavData} from '../../redux/navReduser';
import { connect } from 'react-redux';

class NavbarContainer extends React.Component{
    componentDidMount(){
        axios.get('https://apidata.mos.ru/v1/datasets/495/rows?api_key=c70b711784b712cbe482f9701909fd97')
        .then(response=>{
            console.log(response.data)
            this.props.setNavData(response.data)
        })
    }
  render(){
    if (!this.props.navData) return <div>!!!!!!!!!!!!</div>
    return <Navbar {...this.props}/>
}
}

let mapStateToProps=(state)=>{
    return{
        navData: state.navData.navData
    }
}

export default connect(mapStateToProps,{setNavData})(NavbarContainer);