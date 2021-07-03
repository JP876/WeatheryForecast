#WeatheryForecast

WeatheryForecast is a weather app that includes weather map layers and weather forecast of the chosen city. You can access it [here](https://weathery-forecast.herokuapp.com).

[![weather-app.png](https://i.postimg.cc/t4JBFnc0/weather-app.png)](https://postimg.cc/NKh8cFYb)

---

##Features

-   current weather, hourly forecast for 2 days, and daily forecast for 7 days.
-   temperature for 2 days and 7 days shown graphically
-   ability to save and delete favorite cities for easier future use
-   weather map layers include cloud, rain, snow, and temperature layer
-   uses [OpenWeather](https://openweathermap.org) to fetch the forecast and map layers

---

##Stack

#### Front-end

| Name                                                                           | Description                                                                                                    |
| ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| [React](https://reactjs.org)                                                   | React is a JavaScript library for creating user interfaces.                                                    |
| [Material-UI](https://material-ui.com)                                         | React UI framework.                                                                                            |
| [Leaflet-openweathermap](https://www.npmjs.com/package/leaflet-openweathermap) | An independant JavaScript library for including OWM's layers and OWM's current city data in Leaflet based maps |
| [React-apexcharts](https://www.npmjs.com/package/react-apexcharts)             | React.js wrapper for ApexCharts to build interactive visualizations in react.                                  |
| [Axios](https://www.npmjs.com/package/axios)                                   | Promise based HTTP client for the browser and node.js                                                          |

#### Back-end

| Name                                                   | Description                                                                                                                                                                               |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Dotenv](https://www.npmjs.com/package/dotenv)         | Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.                                                                                    |
| [Express](https://www.npmjs.com/package/express)       | Fast, unopinionated, minimalist web framework for node.                                                                                                                                   |
| [Node-cache](https://www.npmjs.com/package/node-cache) | A simple caching module that has set, get and delete methods and works a little bit like memcached. Keys can have a timeout (ttl) after which they expire and are deleted from the cache. |

---

##Contact

If you have any questions or feedback, feel free to send an email on: popovicjosip867@gmail.com
