import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import * as axios from 'axios';
import { YMaps, Map } from 'react-yandex-maps';

class Info extends React.Component {
  // state={
  //   x:this.props.infoData[0].Cells.geoData.coordinates[1],
  //   y:this.props.infoData[0].Cells.geoData.coordinates[0]
  // };
  componentDidUpdate(prevProps, prevState) {
    console.log('udate')
                    // if (prevProps.features.features[0].geometry.coordinates[0] == prevProps.features.features[0].geometry.coordinates[0]) {
                    //   axios.get(`https://apidata.mos.ru/v1/datasets/495/features?api_key=c70b711784b712cbe482f9701909fd97`)
                    //     .then(response=>{
                    //         console.log(response.data)
                    //         this.props.setFeatures(response.data.features)
                    //     })
                    //     .then(
                    //       axios.get(`https://apidata.mos.ru/v1/datasets/495/rows?$skip=${this.props.match.params.id}&$top=1&api_key=c70b711784b712cbe482f9701909fd97`, {
                    //       }).then(response => {
                    //         console.log(response.data)
                    //         this.props.setInfoData(response.data)
                    //       })
                    //     )
                    // }
    // if (prevProps.infoData[0].Cells.CommonName == this.props.infoData[0].Cells.CommonName) {
    //   let id = this.props.match.params.id;
    //   axios.get(`https://apidata.mos.ru/v1/datasets/495/rows?$skip=${id}&$top=1&api_key=c70b711784b712cbe482f9701909fd97`, {
    //   }).then(response => {
    //     console.log(response.data)
    //     this.props.setInfoData(response.data)
    //   })
    // }

  }
  render() {
    return (
      <div>
        <div>
          {this.props.infoData[0].Cells.CommonName}
        </div>
        <div>
          Адрес: {this.props.infoData[0].Cells.ObjectAddress[0].Address}
        </div>
        <div>
          Телефоны: {this.props.infoData[0].Cells.PublicPhone.map(item => <div>{item.PublicPhone[0]}</div>)}
        </div>
        <div>
          E-mail: {this.props.infoData[0].Cells.Email[0].Email[0]}
        </div>
        <div>

          Часы работ: {this.props.infoData[0].Cells.WorkingHours.map(item => <div>
          <span>{item.DayWeek}</span>: <span>{item.WorkHours}</span>
        </div>)}

        </div>
        <div>
          Количество залов: {this.props.infoData[0].Cells.NumberOfHalls}
        </div>
        <div>
          Сайт: {this.props.infoData[0].Cells.WebSite}
        </div>
        <YMaps>
          <div>
            My awesome application with maps!
            <Map
              state={{
                zoom: 9,
                center: [55.76, 37.64],
                
              }}
            />
          </div>
        </YMaps>
      </div>
    );
  }

}

export default compose(
  withRouter
)(Info)
