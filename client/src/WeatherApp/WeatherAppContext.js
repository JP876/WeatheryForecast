import { createContext, useReducer } from 'react';
import WeatherAppReducer from './WeatherAppReducer';
import { CitiesReducer } from './CitiesReducer';
import useLocalStorageStateReducer from '../hooks/useLocalStorageReducer';

export const WeatherAppState = createContext();
export const WeatherAppDispatch = createContext();
export const CitiesContextState = createContext();
export const CitiesContextDispatch = createContext();

const initialState = {
    drawer: false,
    loading: false,
    data: [],
    value: 0,
    alert: false,
    currentCity: {},
    selectedCity: {},
    homeLocation: {},
    toggle: {
        graph1: true,
        detailedPreview1: true,
        graph2: true,
        detailedPreview2: true,
    },
};
const initialStateCities = {
    savedCity: [],
    listViewSettings: {},
    savedToggleSettings: false,
};

export const WeatherAppProvider = props => {
    const [state, dispatch] = useReducer(WeatherAppReducer, initialState);
    const [cities, dispatchCities] = useLocalStorageStateReducer(
        'cities',
        initialStateCities,
        CitiesReducer
    );

    return (
        <WeatherAppState.Provider value={state}>
            <WeatherAppDispatch.Provider value={dispatch}>
                <CitiesContextState.Provider value={cities}>
                    <CitiesContextDispatch.Provider value={dispatchCities}>
                        {props.children}
                    </CitiesContextDispatch.Provider>
                </CitiesContextState.Provider>
            </WeatherAppDispatch.Provider>
        </WeatherAppState.Provider>
    );
};
