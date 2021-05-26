import React from 'react';
import WeatherApp from './WeatherApp/WeatherApp';
import './App.css';
import { WeatherAppProvider } from './WeatherApp/WeatherAppContext';
import { ThemeProvider } from '@material-ui/core';
import themeApp from './styles/Theme';

function App() {
    return (
        <React.Fragment>
            <ThemeProvider theme={themeApp}>
                <div className='App'>
                    <WeatherAppProvider>
                        <WeatherApp />
                    </WeatherAppProvider>
                </div>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;
