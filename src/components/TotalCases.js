import React from 'react';
import { connect } from 'react-redux';
import { fetchList, fetchTotalCases } from '../actions';

import commaNumber from 'comma-number';


class TotalCases extends React.Component{


   render()
   {
       return (
        <div className="container">
        <h2 style={{ color:"red"}}>Total number of infected people (World)</h2>
        <div>
        <div className="list-group">
            <a className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1" style={{ color:"blue"}}><span style={{ color:"black"}}>Total number of cases -</span> {commaNumber(this.props.totalInfo.cases)}</h5>
           </div>
           <br/>
        <div className="list-group">
           <small style={{ fontSize: "17px"}}>Total number of people recovered - <span style={{ color:"blue"}}>{commaNumber(this.props.totalInfo.recovered)}</span></small>
           <small style={{ fontSize: "17px"}}>Total number of deaths - <span style={{ color:"red"}}>{commaNumber(this.props.totalInfo.deaths)}</span></small>
        </div>
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