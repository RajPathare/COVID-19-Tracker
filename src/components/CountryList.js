import React from 'react';
import { connect } from 'react-redux';
import { fetchList,fetchTotalCases } from '../actions';
import { getCode } from 'country-list';
import countryOverwrite from '../module-overwrite/countryCode';
import commaNumber from 'comma-number';
import ordinal from 'ordinal';
import { elementType } from 'prop-types';

import '../style/box.css'


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
       // delete searchCountry[0]; // remove world cases

        searchCountry.forEach((element,rankNumber=1) => {
            element.rank = ++rankNumber;
        })

        // console.log(searchCountry)
        var searchString = this.state.searchString.trim().toLowerCase();
        // console.log(searchString);
        
        

        if (searchString.length > 0) {
            searchCountry = searchCountry.filter(function(i) {
              return i.country.toLowerCase().match( searchString );
            });
        }

        if(searchCountry.length === 0)
        {
            // console.log('No results found')
            return (
                <div>
                <div className="list-group card-3">
                    <a className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1" style={{ color:"blue"}}>No results found, please try entering your country name again.</h5>

                   </div>
                   
                    </a>
                </div>
            </div>
            )
        }

        return searchCountry.map(cases => {
                return (
                    <div>
                        <div className="list-group card-3">
                            <a className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1" style={{ color:"blue"}}>{cases.country}</h5>
                            <h5 className="mb-1" style={{ color:"red"}}>{ordinal(cases.rank)}</h5>
                            
    
                           </div>
                            <p className="mb-1">Total number of cases - {commaNumber(cases.cases)}</p>
                            <p style={{ color:"red"}}>(World percentage - {(cases.cases/this.props.totalcases.cases * 100).toFixed(2)}%)</p>
                            
                            
                            <small>Number of patients recovered - {commaNumber(cases.recovered)}</small><br/>
                            <small>Total Deaths - {commaNumber(cases.deaths)}</small><br/>
                            <small>Number of deaths today due to the virus - {commaNumber(cases.todayDeaths)}</small>
                            <img className="rounded float-right" style={{ padding:"0 0"}} src={`https://www.countryflags.io/${getCode(cases.country)}/flat/64.png`}></img>
                            </a>
                        </div>
                    </div>
                    
                )
        })
    }

    render()
    {
    
        return (
            <div className="container fadeIn wow" style={{ fontFamily:"Roboto"}}>
            <h2 style={{ color:"#EF6603"}}>Top countries infected by the virus</h2>
            <div className="md-form">
            <input type="text" id="form1" className="form-control card-3" value={this.state.searchString} onChange={this.handleChange} placeholder="Search your country here..."/>
            <br/>
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
