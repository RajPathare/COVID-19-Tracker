import React from 'react';
import Title from './Title';
import CountryList from './CountryList';
import VirusInfo from './VirusInfo';


class App extends React.Component{

    render()
    {
        return (
            <div>
                <Title/>
                <VirusInfo/>
                <CountryList/>
            </div>
        )
    }  
}


export default App;