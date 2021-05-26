import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import Leaflet from 'leaflet';
import {
    MapContainer,
    TileLayer,
    Marker,
    useMapEvents,
    LayersControl,
} from 'react-leaflet';
import Pin from './pinIcon.svg';
import data from '../csvjson.json';
import { v4 as uuidv4 } from 'uuid';
import useStyles from '../styles/MapStyles';
import 'leaflet-openweathermap/leaflet-openweathermap';
import {
    CitiesContextState,
    WeatherAppDispatch,
    WeatherAppState,
} from '../WeatherApp/WeatherAppContext';
import adjustments from './adjustments';
import Overlays from './Overlays';
import isItSaved from './isItSaved';
import PopupComp from './Popup';

const Map = ({ alreadySaved }) => {
    const zoom = 3;
    const position = [20, 0];
    const classes = useStyles();
    const [currentZoom, setCurrentZoom] = useState(zoom);
    const [miniDataState, setMiniDataState] = useState([]);
    const [iconSize, setIconSize] = useState([]);
    const [iconAnchor, setIconAnchor] = useState([]);
    const [popupAnchor, setPopupAnchor] = useState([]);
    const capitalCity = useRef([]);

    const state = useContext(WeatherAppState);
    const dispatch = useContext(WeatherAppDispatch);
    const cities = useContext(CitiesContextState);

    const { savedCity } = cities;
    const { currentCity, selectedCity } = state;

    const GetZoom = () => {
        const event = useMapEvents({
            zoom: () => {
                setCurrentZoom(event._zoom);
            },
        });
        return null;
    };

    const handleClick = (city, country) => {
        dispatch({ type: 'loadingTrue' });
        dispatch({ type: 'drawerOpen' });
        //dispatchCities({ type: 'saved', saved: true });
        alreadySaved.current = isItSaved(selectedCity.location, savedCity);

        if (alreadySaved.current === -1) {
            dispatch({
                type: 'setCurrentCity',
                currentCity: {
                    location: { city: city, country: country },
                    coordinates: selectedCity.coordinates,
                    id: uuidv4(),
                },
            });
            dispatch({ type: 'setValue', newValue: 0 });
        } else {
            dispatch({ type: 'setValue', newValue: alreadySaved.current });
            if (Array.isArray(currentCity.coordinates)) {
                dispatch({ type: 'setValue', newValue: alreadySaved.current + 1 });
            }
        }
    };

    const getSelectedCity = useCallback(
        (e, city, country) => {
            const { lat, lng } = e.latlng;
            dispatch({
                type: 'setSelectedCity',
                selectedCity: {
                    coordinates: [lat, lng],
                    location: { city: city, country: country },
                },
            });
        },
        [dispatch]
    );

    const filterBigCitiess = () => {
        let cities = [];
        data.forEach(city => {
            if (city.capital === 'primary') {
                cities.push(city);
            }
            if (city.capital === 'admin') {
                if (Number.isFinite(city.population)) {
                    cities.push(city);
                }
            }
        });
        return cities;
    };

    const shownCitiesIcon = useCallback(() => {
        capitalCity.current = filterBigCitiess();
        adjustments.forEach(adj => {
            if (currentZoom === adj.zoom) {
                setMiniDataState(
                    capitalCity.current.filter(city => city.population > adj.pop)
                );
                setIconSize(adj.iconSize);
                setIconAnchor(adj.iconAnchor);
                setPopupAnchor(adj.popupAnchor);
            }
        });
    }, [capitalCity, currentZoom]);

    let myIcon = Leaflet.icon({
        iconUrl: Pin,
        iconSize: iconSize,
        iconAnchor: iconAnchor,
        popupAnchor: popupAnchor,
    });

    useEffect(() => {
        filterBigCitiess();
    }, []);

    useEffect(() => {
        shownCitiesIcon();
    }, [shownCitiesIcon]);

    return (
        <div>
            <MapContainer
                center={position}
                zoom={zoom}
                maxZoom={7}
                minZoom={3}
                scrollWheelZoom={true}
                className={classes.mapid}
                worldCopyJump={true}
            >
                <LayersControl position='topright' collapsed={false}>
                    <LayersControl.BaseLayer checked name='OpenStreetMap'>
                        <TileLayer
                            bounds={[
                                [-90, -180],
                                [90, 180],
                            ]}
                            noWrap={true}
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                        />
                    </LayersControl.BaseLayer>
                    <Overlays />
                </LayersControl>
                <GetZoom />
                {miniDataState.map(el => (
                    <Marker
                        position={[el.lat, el.lng]}
                        key={[el.lat, el.lng]}
                        icon={myIcon}
                        eventHandlers={{
                            click: e => {
                                getSelectedCity(e, el.city, el.country);
                                //dispatch({ city: el.city, country: el.country });
                            },
                        }}
                    >
                        <PopupComp
                            lat={el.lat}
                            lng={el.lng}
                            city={el.city}
                            country={el.country}
                            population={el.population}
                            handleClick={handleClick}
                        />
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Map;
