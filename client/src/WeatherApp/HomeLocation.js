import isItSaved from '../Map/isItSaved';
import { v4 as uuidv4 } from 'uuid';

const getPosition = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

const getHomeLocation = async (dispatch, homeBtn) => {
    try {
        const location = await getPosition();
        const newLat = location.coords.latitude;
        const newLon = location.coords.longitude;

        if (location) {
            const request = await fetch('/api/getcity', {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({
                    coordinates: { lat: newLat, lon: newLon },
                }),
            });

            if (request.ok) {
                try {
                    const res = await fetch('/api/getcity');
                    const resData = await res.json();

                    dispatch({
                        type: 'setHomeLocation',
                        homeLocation: {
                            location: resData,
                            coordinates: [newLat, newLon],
                        },
                    });
                } catch (err) {
                    homeBtn.current = {
                        show: false,
                        msg: 'Unable to get your geolocation',
                    };
                }
            }
        }
    } catch (err) {
        homeBtn.current = { show: false, msg: 'Unable to get your geolocation' };
    }
};

const homeWeather = (alreadySaved, homeLocation, savedCity, currentCity, dispatch) => {
    alreadySaved.current = isItSaved(homeLocation.location, savedCity);

    // If it is saved
    if (alreadySaved.current !== -1) {
        // If it is showing current city
        if (currentCity.location) {
            return dispatch({ type: 'setValue', newValue: alreadySaved.current + 1 });
        } else {
            return dispatch({ type: 'setValue', newValue: alreadySaved.current });
        }
    }
    // If it is showing current city
    if (currentCity.location) {
        // If current city is different than home city
        if (homeLocation.location.city !== currentCity.location.city) {
            dispatch({ type: 'loadingTrue' });
            dispatch({
                type: 'setCurrentCity',
                currentCity: {
                    location: homeLocation.location,
                    coordinates: homeLocation.coordinates,
                    id: uuidv4(),
                },
            });
            return null;
        } else {
            return dispatch({ type: 'setValue', newValue: 0 });
        }
    } else {
        // If there is no city showing
        dispatch({ type: 'loadingTrue' });
        dispatch({
            type: 'setCurrentCity',
            currentCity: {
                location: homeLocation.location,
                coordinates: homeLocation.coordinates,
                id: uuidv4(),
            },
        });
        return null;
    }
};

export { getPosition, getHomeLocation, homeWeather };
