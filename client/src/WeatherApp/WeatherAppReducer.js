const WeatherAppReducer = (state, action) => {
    switch (action.type) {
        case 'setData':
            return { ...state, data: action.data };
        case 'drawerOpen':
            return { ...state, drawer: true };
        case 'drawerClose':
            return { ...state, drawer: false };
        case 'loadingTrue':
            return { ...state, loading: true };
        case 'loadingFalse':
            return { ...state, loading: false };
        case 'openAlert':
            return { ...state, alert: true };
        case 'closeAlert':
            return { ...state, alert: false };
        case 'setCurrentCity':
            return { ...state, currentCity: action.currentCity };
        case 'emptyCurrentCity':
            return { ...state, currentCity: {} };
        case 'setValue':
            return { ...state, value: action.newValue };
        case 'setSelectedCity':
            return { ...state, selectedCity: action.selectedCity };
        case 'setHomeLocation':
            return { ...state, homeLocation: action.homeLocation };
        case 'toggleSettings':
            return { ...state, toggle: action.toggle };
        default:
            return state;
    }
};

export default WeatherAppReducer;
