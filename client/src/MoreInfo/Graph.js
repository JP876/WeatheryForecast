import React, { useCallback, useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import convertUnix from '../Helpers/convertUnix';
import { drawerWidth } from '../styles/WeatherAppStyles';
import useStyles from '../styles/GraphStyles';
import initialSettings from './InitialGraphSettings';

function Graph(props) {
    const { data, num, format, listState } = props;
    const classes = useStyles();
    const [settings, setSettings] = useState(initialSettings);

    const tooltip = useCallback(
        ({ series, seriesIndex, dataPointIndex }) => {
            let { feels_like, weather, humidity, pop, uvi, clouds, temp } = data[
                dataPointIndex
            ];

            let icon = `http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;
            let iconDescription = weather[0].description;
            let feelLike = feels_like.day;
            let avgTemp = temp.day;

            if (!feelLike) {
                feelLike = feels_like;
            }

            if (!avgTemp) {
                avgTemp = temp;
            }

            return `
                <div class='${classes.tooltip}'>
                    <img class='${
                        classes.iconImg
                    }' src='${icon}' alt='${iconDescription}' />
                    <h4 class='${classes.descriptionIcon}'>${iconDescription}</h4>
                    <div class='${classes.info}'>
                        <h4>Avg. temp.: <span>${Math.round(avgTemp)}</span></h4>
                        <h4>Feels like: <span>${Math.round(feelLike)}°C</span></h4>
                        <h4>Humidity: <span>${humidity}%</span></h4>
                        <h4>Midday UV index: <span>${uvi}</span></h4>
                        <h4>Cloudiness: <span>${clouds}%</span></h4>
                        <h4>Probability of <br>precipitation: <span>${Math.ceil(
                            pop * 100
                        )}%</span></h4>
                    </div>
                </div>`;
        },
        [data, classes]
    );

    const setTooltip = useCallback(() => {
        if (!listState) {
            setSettings(prevSet => ({
                ...prevSet,
                options: {
                    ...prevSet.options,
                    tooltip: { enabled: true, custom: tooltip },
                },
            }));
        } else {
            setSettings(prevSet => ({
                ...prevSet,
                options: {
                    ...prevSet.options,
                    tooltip: { enabled: false },
                },
            }));
        }
    }, [tooltip, listState]);

    const adjustYaxis = useCallback(
        (numMax, numMin) => {
            let dataArr = [];
            let max, min;

            for (let info of data) {
                if (Number.isFinite(info.temp)) {
                    dataArr.push(Math.round(info.temp));
                    max = Math.max(...dataArr) + numMax;
                    min = Math.min(...dataArr) - numMin;
                } else {
                    dataArr.push(Math.round(info.temp.day));
                    max = Math.max(...dataArr) + numMax;
                    min = Math.min(...dataArr) - numMin;
                }
            }

            return { max: max, min: min };
        },
        [data]
    );

    const setYaxis = useCallback(() => {
        let { max, min } = adjustYaxis(2, 2);
        let tickAmount;

        if (max - min > 12) {
            tickAmount = Math.ceil((max - min) / 2) + 2;
        } else {
            tickAmount = max - min;
        }

        setSettings(prevSet => ({
            ...prevSet,
            options: {
                ...prevSet.options,
                yaxis: {
                    ...prevSet.options.yaxis,
                    max: max,
                    min: min,
                    tickAmount: tickAmount,
                },
            },
        }));
    }, [adjustYaxis]);

    const getTemps = useCallback(
        num => {
            let temps = [];
            let arr;

            for (let info of data) {
                if (Number.isFinite(info.temp)) {
                    temps.push(Math.round(info.temp));
                } else {
                    temps.push(Math.round(info.temp.day));
                }
            }

            if (Number.isFinite(num)) {
                arr = [...temps];
                temps = arr.filter((el, i) => {
                    return i % num === 0;
                });
            }

            setSettings(prevSet => ({
                ...prevSet,
                series: [{ ...prevSet.series, data: temps }],
            }));
        },
        [data]
    );

    const getDate = useCallback(
        num => {
            let date = data.map(d => convertUnix(d.dt, format));
            let arr;

            if (Number.isFinite(num)) {
                arr = [...date];
                date = arr.filter((el, i) => {
                    return i % num === 0;
                });
            }

            setSettings(prevSet => ({
                ...prevSet,
                options: {
                    ...prevSet.options,
                    xaxis: {
                        ...prevSet.options.xaxis,
                        categories: date,
                        tickAmount: date.length,
                    },
                },
            }));
        },
        [data, format]
    );

    useEffect(() => {
        getTemps(num);
        getDate(num);
        setYaxis();
        setTooltip();
    }, [num, getTemps, getDate, setYaxis, setTooltip]);

    return (
        <div>
            <Chart
                options={settings.options}
                series={settings.series}
                width={drawerWidth * 0.92}
            />
        </div>
    );
}

export default Graph;
