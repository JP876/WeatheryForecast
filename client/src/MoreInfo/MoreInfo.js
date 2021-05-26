import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { v4 as uuidv4 } from 'uuid';
import Details from './Details';
import useStyles from '../styles/MoreInfoStyles';
import {
    CitiesContextState,
    WeatherAppDispatch,
    WeatherAppState,
} from '../WeatherApp/WeatherAppContext';
import { SnackbarComp } from './Snackbar';
import { TabPanel, a11yProps } from './TabPanelComp';

const MoreInfo = props => {
    const { getHomeWeather, homeBtn } = props;
    const classes = useStyles();

    const state = useContext(WeatherAppState);
    const dispatch = useContext(WeatherAppDispatch);
    const stateCities = useContext(CitiesContextState);

    const { currentCity, value } = state;
    const { savedCity } = stateCities;

    const handleChange = (event, newValue) => {
        dispatch({ type: 'loadingTrue' });
        dispatch({ type: 'setValue', newValue: newValue });
    };

    const detailsComponent = c => {
        return (
            <Details
                savedCity={c}
                location={c.savedLocation}
                getHomeWeather={getHomeWeather}
                homeBtn={homeBtn}
            />
        );
    };

    return (
        <div className={classes.root}>
            <AppBar position='static' color='default'>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant='scrollable'
                    scrollButtons='on'
                    indicatorColor='primary'
                    textColor='primary'
                    aria-label='scrollable force tabs'
                >
                    {typeof currentCity.location === 'object' && (
                        <Tab
                            className={classes.tab}
                            label={currentCity.location.city}
                            {...a11yProps(0)}
                            key={uuidv4()}
                        />
                    )}
                    {savedCity &&
                        savedCity.length > 0 &&
                        savedCity.map((c, i) => (
                            <Tab
                                className={classes.tab}
                                label={c.savedLocation.city}
                                {...a11yProps(i + 1)}
                                key={uuidv4()}
                            />
                        ))}
                </Tabs>
            </AppBar>
            {currentCity.location ? (
                <div className={classes.p0}>
                    <TabPanel index={0} value={value} key={currentCity.id}>
                        <Details
                            savedCity={savedCity}
                            location={currentCity.location}
                            getHomeWeather={getHomeWeather}
                            homeBtn={homeBtn}
                        />
                    </TabPanel>
                    {savedCity &&
                        savedCity.length > 0 &&
                        savedCity.map((c, i) => (
                            <TabPanel index={i + 1} value={value} key={c.id}>
                                {detailsComponent(c)}
                            </TabPanel>
                        ))}
                </div>
            ) : (
                savedCity.map((c, i) => (
                    <div className={classes.p0} key={c.id}>
                        <TabPanel index={i} value={value} key={c.id}>
                            {detailsComponent(c)}
                        </TabPanel>
                    </div>
                ))
            )}
            <SnackbarComp />
        </div>
    );
};

export default MoreInfo;
