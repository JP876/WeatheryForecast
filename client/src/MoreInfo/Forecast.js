import React from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';
import ListView from './ListView';
import Collapse from '@material-ui/core/Collapse';
import Graph from './Graph';
import Divider from '@material-ui/core/Divider';
import useStyles from '../styles/DetailsStyles';

const Forecast = ({
    handleChange,
    switch1,
    name1,
    switch2,
    name2,
    data,
    graphFormat,
    format2,
    format3,
    num,
    listState,
}) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.toggleBtn}>
                <FormControlLabel
                    labelPlacement='bottom'
                    control={
                        <Switch
                            checked={switch1}
                            color='primary'
                            name={name1}
                            onChange={handleChange}
                        />
                    }
                    label={`${switch1 ? 'Hide' : 'Show'} Graph`}
                />
                <FormControlLabel
                    labelPlacement='bottom'
                    control={
                        <Switch
                            checked={switch2}
                            color='primary'
                            name={name2}
                            onChange={handleChange}
                        />
                    }
                    label={`${switch2 ? 'Hide' : 'Show'} Detailed Preview`}
                />
            </div>
            <Collapse in={switch1} timeout={400}>
                <Graph data={data} format={graphFormat} num={num} listState={listState} />
            </Collapse>
            <div className={classes.animContainer}>
                <Collapse in={switch2} timeout={400}>
                    <ListView
                        data={data}
                        format={format3 ? format3 : graphFormat}
                        num={num}
                        format1={format2 && format2}
                    />
                </Collapse>
            </div>
            <Divider className={classes.divider} />
        </React.Fragment>
    );
};

export default Forecast;
