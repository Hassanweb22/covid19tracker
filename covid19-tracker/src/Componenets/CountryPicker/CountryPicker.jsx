import React, { useState, useEffect } from 'react'
import { FormControl, NativeSelect, Typography } from '@material-ui/core'
import styles from './CountryPicker.module.css'
import { fetchCountry } from "../../api";


export default function CountryPicker({country, handleCountry}) {

    let [countryAPI, setCountryAPI] = useState([])

    useEffect(() => {

        let fetchAPI = async () => {
            setCountryAPI(await fetchCountry())
        }

        fetchAPI()
        // console.log(countryAPI)
        
    }, [setCountryAPI])

    return (
        <div className={styles.formControl}>
            {/* <Typography color="textPrimary" variant="h5" gutterBottom>{country}</Typography> */}
            <FormControl>
                <NativeSelect defaultValue="" onChange={(e)=> handleCountry(e.target.value)}>
                    <option value="">Global</option>
                    {
                        (countryAPI) ?
                            countryAPI.map((country, i) => {
                                return <option key={i} value={country.name}>{country.name}</option>
                            })
                            : null
                    }
                </NativeSelect>
            </FormControl>
        </div>
    )
}
