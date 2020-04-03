import React from 'react';
import Title from './Title';
import CountryList from './CountryList';
import VirusInfo from './VirusInfo';
import TotalCases from './TotalCases';


class App extends React.Component{

    render()
    {
        return (
            <div>
                {/* <Title/> */}
                <VirusInfo/>
                <TotalCases/>
                <CountryList/>
            </div>
        )
    }  
}


export default App;