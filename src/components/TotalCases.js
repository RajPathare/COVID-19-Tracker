import React from 'react';
import { connect } from 'react-redux';
import { fetchList, fetchTotalCases } from '../actions';
import spinningworld from '../assets/spinningworld.gif'

import commaNumber from 'comma-number';
import '../style/box.css'

class TotalCases extends React.Component{


   render()
   {
       return (
        <div className="container fadeIn wow" style={{ fontFamily:"Roboto"}}>
        <h2 style={{ color:"#EF6603"}}>Total number of infected people (World)</h2>
        <div>
        <div className="list-group card-3"> 
            <a className="list-group-item list-group-item-action flex-column align-items-start" style={{ backgroundColor:"white"}}>
            <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1" style={{ color:"blue"}}><span style={{ color:"black"}}>Total number of cases -</span> {commaNumber(this.props.totalInfo.cases)}</h5>
           </div>
           <br/>
        <div className="list-group">
           <small style={{ fontSize: "17px"}}>Total number of people recovered - <span style={{ color:"blue"}}>{commaNumber(this.props.totalInfo.recovered)}</span></small>
           <small style={{ fontSize: "17px"}}>Total number of deaths - <span style={{ color:"red"}}>{commaNumber(this.props.totalInfo.deaths)}</span></small>
           
        </div>
        <img className="rounded float-right" style={{ padding:"0 0", width:"100px", height:"100px"}} src={spinningworld}></img>
            </a>
        </div>
    </div>
    <br/>
    </div>
       )
   }

}

const mapStateToProps = (state) => {
    return { totalInfo: state.totalReducer };
}

export default connect(mapStateToProps,{
    fetchList: fetchList,
    fetchTotalCases:fetchTotalCases
})(TotalCases);