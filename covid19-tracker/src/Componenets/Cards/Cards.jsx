import React from 'react'
import styles from './Cards.module.css'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

export default function Cards(props) {
    const classes = useStyles();
    console.log("props", props)
    let { confirmed, recovered, deaths, lastUpdate } = props.data

    if (!confirmed) {
        return <CircularProgress color="secondary" />;
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={11} md={3} className={cx(styles.card, styles.infected)} >
                    <CardContent>
                        <Typography color="textSecondary" variant="h6" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp star={0} end={confirmed.value} duration={1} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number Of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={11} md={3} className={cx(styles.card, styles.recovered)} >
                    <CardContent>
                        <Typography color="textSecondary" variant="h6" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp star={0} end={recovered.value} duration={1} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number Of Recoveries From COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={11} md={3} className={cx(styles.card, styles.deaths)} >
                    <CardContent>
                        <Typography color="textSecondary" variant="h6" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp star={0} end={deaths.value} duration={1} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number Of Deaths due to COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
