import React from 'react';

// import Cards from './Componenets/Cards/Cards';
// import Charts from './Componenets/Charts/Charts';
// import CountryPicker from './Componenets/CountryPicker/CountryPicker';

import { Cards, Charts, CountryPicker } from "./Componenets"
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {

    state = {
        data: {}
    }

    async componentDidMount() {
        let data = await fetchData();
        //   console.log(confirmed)
        //   console.log(recovered)
        //   console.log(deaths)
        //   console.log(new Date(lastUpdate).toDateString())
        // console.log("componentDidMount ", data)
        this.setState({
            data: data
        })

    }

    render() {
        return (
            <div className={styles.container} >
                <Cards
                    data={this.state.data} />
                <Charts />
                <CountryPicker />
            </div >
        )
    }
}
export default App;