import React, { useContext } from 'react';
import { Button, Divider, Drawer, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import HomeIcon from '@material-ui/icons/Home';
import { useStyles } from '../styles/WeatherAppStyles';
import { useTheme } from '@material-ui/core/styles';
import {
    CitiesContextState,
    WeatherAppDispatch,
    WeatherAppState,
} from './WeatherAppContext';
import MoreInfo from '../MoreInfo/MoreInfo';

const DrawerComponent = props => {
    const { getHomeWeather, homeBtn } = props;
    const classes = useStyles();
    const theme = useTheme();

    const state = useContext(WeatherAppState);
    const dispatch = useContext(WeatherAppDispatch);
    const stateCities = useContext(CitiesContextState);

    const { drawer, currentCity } = state;
    const { savedCity } = stateCities;

    return (
        <Drawer
            className={classes.drawer}
            variant='persistent'
            anchor='left'
            open={drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={() => dispatch({ type: 'drawerClose' })}>
                    <ChevronLeftIcon style={{ color: theme.palette.primary.main }} />
                </IconButton>
            </div>
            <Divider />
            {currentCity &&
            ((savedCity && savedCity.length > 0) ||
                Array.isArray(currentCity.coordinates)) ? (
                <React.Fragment>
                    <MoreInfo homeBtn={homeBtn} getHomeWeather={getHomeWeather} />
                </React.Fragment>
            ) : (
                <div className={classes.intro}>
                    <div className={classes.introContainer}>
                        <div className={classes.introImg} />
                        <Button
                            variant='contained'
                            color='primary'
                            size='medium'
                            onClick={getHomeWeather}
                            startIcon={<HomeIcon />}
                            disabled={homeBtn.current ? !homeBtn.current.show : false}
                        >
                            Weather Forecast
                        </Button>
                        {homeBtn.current && homeBtn.current.msg && (
                            <h4>{homeBtn.current.msg}</h4>
                        )}
                    </div>
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
            )}
            <Divider />
        </Drawer>
    );
};

export default DrawerComponent;
