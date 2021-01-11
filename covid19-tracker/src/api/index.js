import axios from 'axios';

const url = "https://covid19.mathdro.id/api"

export const fetchData = async (params) => {
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}}= await axios.get(url)
        
        const modifiedData={
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