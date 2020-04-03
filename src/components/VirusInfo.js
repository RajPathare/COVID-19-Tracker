import React from 'react';
import { connect } from 'react-redux';
import { fetchList,fetchTotalCases } from '../actions';

import commaNumber from 'comma-number';


class VirusInfo extends React.Component {


    render()
    {
        return (<div className="container">
        
        <h3 style={{ fontFamily:"Roboto"}}>About the virus</h3>
        <div className="lead" style={{ fontFamily:"Roboto"}}>
        Coronaviruses (CoV) are a large family of viruses that cause illness ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS-CoV) and Severe Acute Respiratory Syndrome (SARS-CoV).
        Coronavirus disease (COVID-19) is a new strain that was discovered in 2019 and has not been previously identified in humans.
        Coronaviruses are zoonotic, meaning they are transmitted between animals and people. <br/> Detailed investigations found that SARS-CoV was transmitted from civet cats to humans and MERS-CoV from dromedary camels to humans. Several known coronaviruses are circulating in animals that have not yet infected humans. 
        Common signs of infection include respiratory symptoms, fever, cough, shortness of breath and breathing difficulties.<br/> In more severe cases, infection can cause pneumonia, severe acute respiratory syndrome, kidney failure and even death. 
        Standard recommendations to prevent infection spread include regular hand washing, covering mouth and nose when coughing and sneezing, thoroughly cooking meat and eggs. Avoid close contact with anyone showing symptoms of respiratory illness such as coughing and sneezing.
    </div>
    <br/>
    </div>
    )
    }
    
}

const mapStateToProps = (state) => {
    return { totalcases: state.totalReducer };
}

export default connect(mapStateToProps,{
 fetchTotalCases:fetchTotalCases
})(VirusInfo);