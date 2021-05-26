const express = require('express');
const app = express();
const axios = require('axios');
const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');
const NodeCache = require('node-cache');
require('dotenv').config();

app.use(express.json({ limit: '1mb' }));
app.use(express.static('client/build'));

const BASE_URL = 'https://api.openweathermap.org/data/2.5/onecall?';

let lat, lon, coordinates, city;
let cachedCities = [];
const myCacheCities = new NodeCache({ stdTTL: 900, checkperiod: 1000 });
const myCacheHome = new NodeCache({ stdTTL: 3600, checkperiod: 3700 });

const limiter = rateLimit({
    windowMs: 30 * 1000,
    max: 8,
});

const speedLimiter = slowDown({
    windowMs: 30 * 1000,
    delayAfter: 4,
    delayMs: 500,
});

app.post('/api/getdata', (req, res) => {
    coordinates = req.body.coordinates;
    city = req.body.city;
    lat = coordinates.lat;
    lon = coordinates.lon;
    console.log('---------------');
    console.log(`Data: ${lat} ${lon} ${city}`);
    res.json({ status: 'success' });
});

const cachedData = data => {
    let found = myCacheCities.get(city);

    if (!found) {
        cachedCities.push({ key: city, val: data });
        myCacheCities.mset(cachedCities);
    }
};

const getCachedData = (req, res, next) => {
    let cachedCity = myCacheCities.get(city);
    console.log(myCacheCities.keys());

    if (cachedCity) {
        return res.json(cachedCity);
    } else {
        next();
    }
};

app.get('/api/getdata', getCachedData, limiter, speedLimiter, async (req, res, next) => {
    try {
        const params = new URLSearchParams({
            lat: lat,
            lon: lon,
            exclude: 'alerts',
            units: 'metric',
            appid: process.env.API_KEY,
        });
        const { data } = await axios.get(`${BASE_URL}${params}`);
        cachedData(data);
        console.log('Fetching Data');
        console.log('---------------');

        return res.json(data);
    } catch (err) {
        next(err);
    }
});

const cachedHome = data => {
    myCacheHome.set('home', data);
};

const getCachedHome = (req, res, next) => {
    let cachedCityHome = myCacheHome.get('home');

    if (cachedCityHome) {
        return res.json(cachedCityHome);
    } else {
        next();
    }
};

app.post('/api/getcity', (req, res) => {
    coordinates = req.body.coordinates;
    lat = coordinates.lat;
    lon = coordinates.lon;
    res.json({ status: 'success' });
});

app.get('/api/getCity', getCachedHome, limiter, async (req, res) => {
    try {
        const { data } = await axios.get(`https://geocode.xyz/${lat},${lon}?geoit=json`);
        cachedHome({ city: data.city, country: data.country });
        console.log('Fetching location info');

        return res.json({ city: data.city, country: data.country });
    } catch (err) {
        console.error(err);
    }
});

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);

app.set('trust proxy', 1);

if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
    });
}
