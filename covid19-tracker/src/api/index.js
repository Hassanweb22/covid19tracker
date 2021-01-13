import axios from 'axios';

const url = "https://covid19.mathdro.id/api"

export const fetchData = async (country) => {
    let changeableUrl = url

    if (country) {
        changeableUrl = `${url}/countries/${country}`
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl)

        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate,
        }

        return modifiedData

    } catch (error) {
        console.log(error)
    }

    // let response = await fetch(url)
    // response = await response.json()
    // return response
}


export const fetchDailyData = async () => {
    try {
        let { data } = await axios.get(`${url}/daily`)
        // console.log(data)
        let modifiedData = data.map((daily) => {
            return {
                confirmed: daily.confirmed.total,
                deaths: daily.deaths.total,
                date: daily.reportDate,
            }

        })
        console.log("dailydata: ", modifiedData)

        return modifiedData

    } catch (error) {
        console.log(error)
    }
}

export const fetchCountry = async () => {
    try {
        let { data: { countries } } = await axios.get(`${url}/countries`)
        console.log("countries Data: ", countries)
        return countries

    } catch (error) {
        console.log(error)
    }
}