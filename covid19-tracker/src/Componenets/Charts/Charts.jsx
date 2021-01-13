import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api/index'
import { Bar, Line } from "react-chartjs-2"
import styles from "./Charts.module.css"


export default function Charts({ data, country }) {
    const [dailydata, setdailydata] = useState([])
    // const [country, setCountry] = useState("")

    useEffect(() => {

        let fetchAPI = async () => {
            setdailydata(await fetchDailyData())
        }

        fetchAPI()
    }, [])


    // let { confirmed, recovered, deaths } = country
    // console.log("countrydata: ", confirmed, deaths, recovered)

    let barChart = (data.confirmed) ?
        < Bar
            height={160}
            data={
                {
                    labels: [`Covid Cases In ${country}`],
                    datasets: [
                        {
                            label: "Infetcted",
                            backgroundColor: 'rgba(0, 0, 255, 0.660)',
                            // hoverBackgroundColor: 'rgba(0, 0, 255, 0.560)',
                            data: [data.confirmed.value]

                        },
                        {
                            label: "Recovered",
                            backgroundColor: 'rgba(0, 128, 0, 0.660',
                            hoverBackgroundColor: 'rgba(0, 128, 0, 0.660',
                            data: [data.recovered.value]

                        },
                        {
                            label: "Deaths",
                            backgroundColor: 'rgba(255, 0, 0, 0.660)',
                            // hoverBackgroundColor: 'rgba(255, 0, 0, 0.560)',
                            data: [data.deaths.value]
                        }
                    ]
                }
            }

        /> : null


    let lineChart = (dailydata) ?
        <Line
            // height={400}
            // width={85}
            data={{
                labels: dailydata.map((daily) => daily.date),
                datasets: [{
                    data: dailydata.map((daily) => daily.confirmed),
                    label: "Infected",
                    borderColor: "#3333ff",
                    borderDash:["'"],
                },
                {
                    data: dailydata.map((daily) => daily.deaths),
                    label: "Deaths",
                    borderColor: "rgb(255, 0, 0, 0.7)",
                },
                ]
            }}
        /> : null

    return (
        <div className={styles.container}>
            {(country) ? barChart : lineChart}
        </div>
    )
}
