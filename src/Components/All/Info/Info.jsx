import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import * as axios from 'axios';

class Info extends React.Component{
  componentDidUpdate(prevProps,prevState){
    console.log('udate')
    if (prevProps.infoData[0].Cells.CommonName == this.props.infoData[0].Cells.CommonName){
      let id=this.props.match.params.id;
    axios.get(`https://apidata.mos.ru/v1/datasets/495/rows?$skip=${id}&$top=1&api_key=c70b711784b712cbe482f9701909fd97`,{
        withCredentials:false
    }).then(response=>{
        console.log(response.data)
        this.props.setInfoData(response.data)
    })
    }
}
  render(){
    return (
      <div>
        {String(this.props.infoData[0].Cells.CommonName)}
      </div>
    );
  }
 
}

export default compose(
  withRouter
)(Info)
