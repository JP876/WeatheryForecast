import React from 'react';
import { Divider } from '@material-ui/core';
import convertUnix from '../Helpers/convertUnix';
import useStyles from '../styles/CurrentInfoStyles';

function CurrentInfo(props) {
    const classes = useStyles();
    const {
        dt,
        temp,
        feels_like,
        sunrise,
        sunset,
        humidity,
        weather,
        clouds,
    } = props.data.current;
    const { city, country } = props.data.location;

    return (
        <div className={classes.currentInfo}>
            <div className={classes.title}>
                <h2 className={classes.cityCountry}>{`${city}, ${country}`}</h2>
                <h2 className={classes.date}>{convertUnix(dt, 'dd/mm/yy')}</h2>
            </div>
            <Divider />
            <div className={classes.titleContainer}>
                <h4 className={classes.forecastTitle}>Current Weather</h4>
            </div>
            <div className={classes.icons}>
                {weather.map(icon => (
                    <div className={classes.icon} key={icon.description}>
                        <img
                            src={`http://openweathermap.org/img/wn/${icon.icon}@4x.png`}
                            alt={icon.description}
                        />
                        <h3>{icon.description}</h3>
                    </div>
                ))}
            </div>

            <div className={classes.info}>
                <div className={classes.leftSide}>
                    <h3>
                        Current Temp. : <span>{Math.round(temp)}°C</span>
                    </h3>
                    <h3>
                        Feels Like: <span>{Math.round(feels_like)}°C</span>
                    </h3>
                    <h3>
                        Cloudiness: <span>{clouds}%</span>
                    </h3>
                </div>

                <div className={classes.rightSide}>
                    <h3>
                        Humidity: <span>{humidity}%</span>
                    </h3>
                    <h3>
                        Sunrise: <span>{convertUnix(sunrise, 'hh/mm')}, UTC</span>
                    </h3>
                    <h3>
                        Sunset: <span>{convertUnix(sunset, 'hh/mm')}, UTC</span>
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default CurrentInfo;
