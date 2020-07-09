import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import Styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards= ({data:{confirmed,recovered,deaths,lastUpdate}})=>{
    if(!confirmed)
    return '...loading';
    
    return(
        <div className={Styles.container}>
            <Grid container spacing={10} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(Styles.Card,Styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" guttorbottom='true'>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} seperator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">No of Active Cases of Covid-19</Typography>
                    </CardContent>

                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(Styles.Card,Styles.recovered)}>

                    <CardContent>
                        <Typography color="textSecondary" guttorbottom='true'>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={2.5} seperator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">No of Recovered Cases of Covid-19</Typography>
                    </CardContent>

                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(Styles.Card,Styles.deaths)}>

                    <CardContent>
                        <Typography color="textSecondary" guttorbottom='true'>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2.5} seperator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">No of Death Cases of Covid-19</Typography>
                    </CardContent>

                </Grid>

            </Grid>

        </div>
    )
}
export default Cards;
