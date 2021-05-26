import { v4 as uuidv4 } from 'uuid';

const addCity = (currentCity, savedCity) => {
    const { location, coordinates } = currentCity;
    let newSavedCity = [];

    if (savedCity && savedCity.length > 0) {
        newSavedCity = [
            ...savedCity,
            {
                savedLocation: location,
                savedCoordinates: coordinates,
                isSaved: true,
                id: uuidv4(),
            },
        ];
    } else {
        newSavedCity = [
            {
                savedLocation: location,
                savedCoordinates: coordinates,
                isSaved: true,
                id: uuidv4(),
            },
        ];
    }

    return newSavedCity;
};

const removeCity = (location, savedCity) => {
    if (savedCity) {
        return savedCity.filter(city => city.savedLocation.city !== location.city);
    }
};

export const CitiesReducer = (state, action) => {
    const { savedCity } = state;

    switch (action.type) {
        case 'addCity':
            return { ...state, savedCity: addCity(action.currentCity, savedCity) };
        case 'removeCity':
            return { ...state, savedCity: removeCity(action.location, savedCity) };
        case 'saveToggleSettings':
            return { ...state, listViewSettings: action.toggle };
        case 'saved':
            return { ...state, savedToggleSettings: action.saved };
        default:
            return state;
    }
};
