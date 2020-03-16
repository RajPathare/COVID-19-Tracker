import React from 'react';
import { connect } from 'react-redux';
import { fetchList,fetchTotalCases } from '../actions';


class CountryList extends React.Component{

    state = { searchString: '' }

    componentDidMount = () =>{
        this.props.fetchList();
        this.props.fetchTotalCases();
    }

    handleChange = (e) => {
        this.setState({ searchString:e.target.value });
    }


    renderList = () => {

        var searchCountry = this.props.cases;
        console.log(searchCountry);
        var searchString = this.state.searchString.trim().toLowerCase();
        console.log(searchString);

        if (searchString.length > 0) {
            searchCountry = searchCountry.filter(function(i) {
              return i.country.toLowerCase().match( searchString );
            });
        }

        return searchCountry.map(cases => {
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
                            <small>Number of deaths today due to the virus - {cases.todayDeaths}</small>
                            </a>
                        </div>
                    </div>
                )
        })
    }

    render()
    {
        // console.log(this.props.cases)
        // console.log(this.props.totalcases.cases)
        // console.log(this.state.searchString)
        return (
            <div className="container">
            <h2>Top 100 countries infected with the virus</h2>
            <div className="md-form">
            <input type="text" id="form1" className="form-control" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here..."/>
            <h5>Search your country here...</h5>
            </div>
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