import React from 'react';
import Navbar from './Navbar';
import * as axios from 'axios';
import { setNavData, setNames, SetTotalCount, SetPageCount } from '../../../redux/navReduser';
import { setCounter } from '../../../redux/headerReduser';
import { connect } from 'react-redux';

class NavbarContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://apidata.mos.ru/v1/datasets/495/count?api_key=c70b711784b712cbe482f9701909fd97`)
            .then(response => {
                debugger
                console.log(response.data)
                this.props.SetTotalCount(response.data)
            })
            .then(
                axios.get(`https://apidata.mos.ru/v1/datasets/495/rows?$skip=${this.props.onOnePage * this.props.numberOfPage}&$top=${this.props.onOnePage}&api_key=c70b711784b712cbe482f9701909fd97`)
                    .then(response => {
                        console.log(response.data)
                        debugger
                        this.props.setNavData(response.data)
                    })
            )
    }
    onPageChange=(numberOfPage)=>{
        axios.get(`https://apidata.mos.ru/v1/datasets/495/count?api_key=c70b711784b712cbe482f9701909fd97`)
            .then(response => {
                debugger
                console.log(response.data)
                this.props.SetTotalCount(response.data)
            })
            .then(
                axios.get(`https://apidata.mos.ru/v1/datasets/495/rows?$skip=${this.props.onOnePage * numberOfPage}&$top=${this.props.onOnePage}&api_key=c70b711784b712cbe482f9701909fd97`)
                    .then(response => {
                        console.log(response.data)
                        debugger
                        this.props.setNavData(response.data)
                    })
            )
    };
    render() {
        if (!this.props.navData) return <div>!!!!!!!!!!!!</div>
        return <Navbar {...this.props} onPageChange={this.onPageChange} />
    }
}

let mapStateToProps = (state) => {
    return {
        navData: state.navData.navData,
        liked: state.navData.liked,
        name: state.navData.name,
        totalCount: state.navData.totalCount,
        numberOfPage: state.navData.numberOfPage,
        onOnePage: state.navData.onOnePage,
    }
}

export default connect(mapStateToProps, { setNavData, setCounter, setNames, SetTotalCount, SetPageCount })(NavbarContainer);