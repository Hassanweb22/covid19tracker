import React from 'react';

// import Cards from './Componenets/Cards/Cards';
// import Charts from './Componenets/Charts/Charts';
// import CountryPicker from './Componenets/CountryPicker/CountryPicker';

import { Cards, Charts, CountryPicker } from "./Componenets"
import styles from './App.module.css';
import { fetchData } from './api';
import Logo from "./images/image.png";

class App extends React.Component {

    state = {
        data: {},
        country: ""
    }

    async componentDidMount() {
        const data = await fetchData()
        //   console.log(recovered)
        //   console.log(deaths)
        //   console.log(new Date(lastUpdate).toDateString())
        // console.log("componentDidMount ", data)
        this.setState({
            data: data,
        })

    }
    handleCountryChanges = async (country) => {
        const CountryData = await fetchData(country)
        console.log(country, ": ", CountryData)
        this.setState({
            data: CountryData,
            country: country
        })
    }

    render() {
        let { data, country } = this.state
        return (
            <div className={styles.container} >
                <div className={styles.logo}>
                    <img src={Logo} alt="Logo.png" />
                </div>
                <Cards
                    data={data} />
                <CountryPicker country={country} handleCountry={this.handleCountryChanges} />
                <Charts data={data} country={country} />
            </div >
        )
    }
}
export default App;