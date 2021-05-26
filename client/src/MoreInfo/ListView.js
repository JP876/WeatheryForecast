import React from 'react';
//import useStyles from '../styles/GraphStyles';
import { v4 as uuidv4 } from 'uuid';
import { useTheme } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import convertUnix from '../Helpers/convertUnix';
import { useMediaQuery } from '@material-ui/core';
import useStyles from '../styles/ListViewStyles';

const ListView = props => {
    const classes = useStyles();
    let { data, format, format1, num } = props;
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    let arr;

    if (Number.isFinite(num)) {
        arr = [...data];
        data = arr.filter((el, i) => {
            return i % num === 0;
        });
    }

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={matches ? 2 : 2.6}>
                {data.map(el => (
                    <GridListTile key={uuidv4()}>
                        <div className={classes.container}>
                            {format1 && (
                                <h4 className={classes.date1}>
                                    {convertUnix(el.dt, format1)}
                                </h4>
                            )}
                            <h4 className={classes.date}>{convertUnix(el.dt, format)}</h4>
                            <img
                                className={classes.iconImg}
                                src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@4x.png`}
                                alt={el.weather[0].description}
                            />
                            <h4 className={classes.descriptionIcon}>
                                {el.weather[0].description}
                            </h4>
                            <div className={classes.info}>
                                <h4>
                                    Avg. temp.:{' '}
                                    <span>
                                        {Math.round(el.temp.day ? el.temp.day : el.temp)}
                                        °C
                                    </span>
                                </h4>
                                <h4>
                                    Feels like:{' '}
                                    <span>
                                        {Math.round(
                                            el.feels_like.day
                                                ? el.feels_like.day
                                                : el.feels_like
                                        )}
                                        °C
                                    </span>
                                </h4>
                                <h4>
                                    Humidity: <span>{el.humidity}%</span>
                                </h4>
                                <h4>
                                    Midday UV index: <span>{el.uvi}</span>
                                </h4>
                                <h4>
                                    Cloudiness: <span>{el.clouds}%</span>
                                </h4>
                                <h4>
                                    Probability of precipitation:{' '}
                                    <span>{Math.ceil(el.pop * 100)}%</span>
                                </h4>
                            </div>
                        </div>
                        <GridListTileBar />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
};

export default ListView;
