import React from 'react';
import { connect } from 'react-redux';
import { fetchList,fetchTotalCases } from '../actions';


class CountryList extends React.Component{

    

    componentDidMount = () =>{
        this.props.fetchList();
        this.props.fetchTotalCases();
    }


    renderList = () => {
        return this.props.cases.map(cases => {
                return (
                    <div>
                        <div className="list-group">
                            <a className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{cases.country}</h5>
    
                           </div>
                            <p className="mb-1">Total number of cases - {cases.cases}</p>
                            <small>Number of patients recovered - {cases.recovered}</small><br/>
                            <small>Total Deaths - {cases.deaths}</small><br/>
                            <small>Number of deaths today due to the virus - {cases.todayCases}</small>
                            </a>
                        </div>
                    </div>
                )
        })
    }

    render()
    {
        console.log(this.props.cases)
        console.log(this.props.totalcases.cases)
        return (
            <div className="container">
            <h2>Top 100 countries infected with the virus</h2>
            {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { cases: state.confirmedcases,
    totalcases: state.totalReducer };
}

export default connect(mapStateToProps,{
    fetchList: fetchList,
    fetchTotalCases: fetchTotalCases
})(CountryList);