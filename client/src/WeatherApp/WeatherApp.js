import React, { useCallback, useContext, useEffect, useRef } from 'react';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Map from '../Map/Map';
import { useStyles } from '../styles/WeatherAppStyles';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import {
    CitiesContextState,
    WeatherAppDispatch,
    WeatherAppState,
} from './WeatherAppContext';
import { getHomeLocation, homeWeather } from './HomeLocation';
import DrawerComponent from './DrawerComp';
import isItSaved from '../Map/isItSaved';

function WeatherApp(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const state = useContext(WeatherAppState);
    const dispatch = useContext(WeatherAppDispatch);
    const stateCities = useContext(CitiesContextState);
    const { drawer, currentCity, value, homeLocation } = state;
    const { savedCity } = stateCities;

    const lat = useRef(0);
    const long = useRef(0);
    const selectedCityDrawer = useRef(null);
    const alreadySaved = useRef(null);
    const isHomeLocationSaved = useRef(null);
    const homeBtn = useRef(null);

    const getLatLonCity = useCallback(() => {
        let newLat, newLong, newCity;

        if (currentCity.coordinates) {
            newLat = currentCity.coordinates[0];
            newLong = currentCity.coordinates[1];
            newCity = currentCity.location.city;

            if (value > 0) {
                newLat = savedCity[value - 1].savedCoordinates[0];
                newLong = savedCity[value - 1].savedCoordinates[1];
                newCity = savedCity[value - 1].savedLocation.city;
            }
        } else {
            if (savedCity.length > 0) {
                newLat = savedCity[value].savedCoordinates[0];
                newLong = savedCity[value].savedCoordinates[1];
                newCity = savedCity[value].savedLocation.city;
            }
        }

        if (newLat) {
            lat.current = newLat;
            long.current = newLong;
            selectedCityDrawer.current = newCity;
        }
    }, [currentCity, savedCity, value]);

    const getData = useCallback(async () => {
        try {
            getLatLonCity();
            let coordinates = { lat: lat.current, lon: long.current };

            if (lat !== 0 && long !== 0) {
                const request = await fetch('/api/getdata', {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'POST',
                    body: JSON.stringify({
                        coordinates: coordinates,
                        city: selectedCityDrawer.current,
                    }),
                });

                if (request.ok) {
                    const res = await fetch('/api/getdata');
                    const resData = await res.json();
                    //setData(resData);
                    dispatch({ type: 'setData', data: resData });
                    dispatch({ type: 'loadingFalse' });
                }
            }
        } catch (error) {
            console.log(error);
        }
    }, [dispatch, getLatLonCity]);

    const getHomeWeather = useCallback(() => {
        return homeWeather(alreadySaved, homeLocation, savedCity, currentCity, dispatch);
    }, [alreadySaved, homeLocation, savedCity, currentCity, dispatch]);

    const displayHomeBtn = useCallback(() => {
        if (homeLocation.location) {
            if (homeLocation.location.city === selectedCityDrawer.current) {
                homeBtn.current = { show: false, msg: null };
            } else {
                homeBtn.current = { show: true, msg: null };
            }
        }
    }, [homeLocation]);

    useEffect(() => {
        isHomeLocationSaved.current = isItSaved(homeLocation.location, savedCity);
    }, [homeLocation, savedCity]);

    useEffect(() => getHomeLocation(dispatch, homeBtn), [dispatch]);

    useEffect(() => {
        if (
            drawer === true &&
            ((savedCity && savedCity.length > 0) || currentCity.coordinates)
        ) {
            getData();
            displayHomeBtn();
        }
    }, [drawer, getData, savedCity, currentCity, displayHomeBtn]);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position='fixed'
                className={classNames(classes.appBar, {
                    [classes.appBarShift]: drawer,
                })}
            >
                <Toolbar disableGutters={!drawer}>
                    <IconButton
                        color='inherit'
                        aria-label='Open drawer'
                        onClick={() => dispatch({ type: 'drawerOpen' })}
                        className={classNames(classes.menuButton, drawer && classes.hide)}
                    >
                        <InfoOutlinedIcon className={classes.icon} />
                    </IconButton>
                    <Typography className={classes.title} color='inherit' noWrap>
                        WeatheryForecast
                    </Typography>
                </Toolbar>
            </AppBar>
            {matches ? (
                <DrawerComponent getHomeWeather={getHomeWeather} homeBtn={homeBtn} />
            ) : (
                <DrawerComponent getHomeWeather={getHomeWeather} homeBtn={homeBtn} />
            )}
            <main
                className={classNames(classes.content, {
                    [classes.contentShift]: drawer,
                })}
            >
                <div className={classes.drawerHeader} />
                <Map alreadySaved={alreadySaved} />
            </main>
        </div>
    );
}

export default WeatherApp;
