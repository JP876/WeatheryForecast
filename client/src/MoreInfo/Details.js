import React, { useContext, useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import SaveIcon from '@material-ui/icons/Save';
import HomeIcon from '@material-ui/icons/Home';
import DeleteIcon from '@material-ui/icons/Delete';
import CurrentInfo from './CurrentInfo';
import {
    CitiesContextDispatch,
    CitiesContextState,
    WeatherAppDispatch,
    WeatherAppState,
} from '../WeatherApp/WeatherAppContext';
import useStyles from '../styles/DetailsStyles';
import DialogComponent from './Dialog';
import Forecast from './Forecast';

const Details = props => {
    const classes = useStyles();
    const { savedCity, location, getHomeWeather, homeBtn } = props;

    const state = useContext(WeatherAppState);
    const stateCities = useContext(CitiesContextState);
    const dispatch = useContext(WeatherAppDispatch);
    const dispatchCities = useContext(CitiesContextDispatch);

    const { loading, currentCity, toggle, data } = state;
    const { listViewSettings, savedToggleSettings } = stateCities;
    const { daily, hourly, current } = data;

    const [dialog, setDialog] = useState(false);

    const handleAddClick = () => {
        dispatchCities({ type: 'addCity', currentCity: currentCity });
        dispatch({ type: 'emptyCurrentCity' });
        dispatch({ type: 'setValue', newValue: savedCity ? savedCity.length : 0 });
        dispatch({ type: 'openAlert' });
    };

    const handleDeleteClick = () => {
        dispatchCities({ type: 'removeCity', location: savedCity.savedLocation });
        dispatch({ type: 'setValue', newValue: 0 });
    };

    const closeDialog = () => {
        setDialog(false);
    };

    const openDialog = () => {
        setDialog(true);
    };

    const handleChange = event => {
        dispatchCities({ type: 'saved', saved: false });
        dispatch({
            type: 'toggleSettings',
            toggle: { ...toggle, [event.target.name]: event.target.checked },
        });
    };

    const saveToggleSettings = () => {
        dispatchCities({ type: 'saveToggleSettings', toggle: { ...toggle } });
        dispatchCities({ type: 'saved', saved: true });
    };

    useEffect(() => {
        if (Object.keys(listViewSettings).length > 0) {
            dispatch({
                type: 'toggleSettings',
                toggle: { ...listViewSettings },
            });
        }
    }, [dispatch, listViewSettings]);

    return (
        <div className={classes.root}>
            {!loading && daily && hourly && current ? (
                <div className={classes.details}>
                    <CurrentInfo data={{ current, location }} />
                    <Divider className={classes.divider} />
                    <h4 className={classes.forecastTitle}>2-Day Forecast</h4>
                    <Forecast
                        handleChange={handleChange}
                        switch1={
                            savedToggleSettings ? listViewSettings.graph1 : toggle.graph1
                        }
                        name1='graph1'
                        switch2={
                            savedToggleSettings
                                ? listViewSettings.detailedPreview1
                                : toggle.detailedPreview1
                        }
                        name2='detailedPreview1'
                        data={hourly}
                        graphFormat='hh/dd'
                        format2='nd'
                        num={6}
                        listState={toggle.detailedPreview1}
                    />
                    <h4 className={classes.forecastTitle}>7-Day Forecast</h4>
                    <Forecast
                        handleChange={handleChange}
                        switch1={
                            savedToggleSettings ? listViewSettings.graph2 : toggle.graph2
                        }
                        name1='graph2'
                        switch2={
                            savedToggleSettings
                                ? listViewSettings.detailedPreview2
                                : toggle.detailedPreview2
                        }
                        name2='detailedPreview2'
                        data={daily}
                        graphFormat='dd/mm'
                        format3='nd/dd/mm'
                        listState={toggle.detailedPreview2}
                    />
                    <div className={classes.btnContainer}>
                        <div className={classes.buttons}>
                            <Button
                                variant='contained'
                                color='primary'
                                size='medium'
                                startIcon={<SaveIcon />}
                                onClick={handleAddClick}
                                disabled={savedCity ? savedCity.isSaved : false}
                                className={classes.btn}
                            >
                                Save City
                            </Button>
                            <Button
                                variant='contained'
                                color='secondary'
                                size='medium'
                                startIcon={<DeleteIcon />}
                                onClick={openDialog}
                                disabled={savedCity ? !savedCity.isSaved : true}
                                className={classes.btn}
                            >
                                Delete City
                            </Button>
                        </div>
                        {homeBtn.current && (
                            <div className={classes.homeBtn}>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    size='medium'
                                    onClick={getHomeWeather}
                                    disabled={!homeBtn.current.show}
                                    startIcon={<HomeIcon />}
                                    className={classes.btn}
                                >
                                    Home Weather Forecast
                                </Button>
                                {homeBtn.current.msg && <h4>{homeBtn.current.msg}</h4>}
                            </div>
                        )}
                        <div className={classes.toggleBtnContainer}>
                            <Button
                                variant='contained'
                                color='primary'
                                size='medium'
                                startIcon={<SaveIcon />}
                                onClick={saveToggleSettings}
                                className={classes.btn}
                                disabled={
                                    JSON.stringify(listViewSettings) ===
                                    JSON.stringify(toggle)
                                }
                            >
                                Save Toggle Settings
                            </Button>
                        </div>
                    </div>
                    <Divider className={classes.divider} />
                    <div className={classes.copyright}>
                        <div>
                            <h4>Powered by </h4>
                            <a
                                href='https://openweathermap.org/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                OpenWeatherMap
                            </a>
                        </div>
                        <div>
                            <h4>World Cities Database from </h4>
                            <a
                                href='https://simplemaps.com/data/world-cities'
                                target='_blank'
                                rel='noreferrer'
                            >
                                SimpleMaps
                            </a>
                        </div>
                        <div>
                            <h4>Vector for favicon created by macrovector from </h4>
                            <a
                                target='_blank'
                                rel='noreferrer'
                                href='https://www.freepik.com/free-photos-vectors/background'
                            >
                                freepik
                            </a>
                        </div>
                        <h4>
                            Made with React by <span>Josip Popović</span>
                        </h4>
                    </div>
                </div>
            ) : (
                <div className={classes.progress}>
                    <CircularProgress size='3.5rem' thickness={3.5} />
                </div>
            )}
            <DialogComponent
                dialog={dialog}
                closeDialog={closeDialog}
                handleDeleteClick={handleDeleteClick}
            />
        </div>
    );
};

export default Details;
