import React, { useContext } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import useStyles from '../styles/MoreInfoStyles';
import { WeatherAppDispatch, WeatherAppState } from '../WeatherApp/WeatherAppContext';

function Alert(props) {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
}

export const SnackbarComp = () => {
    const classes = useStyles();
    const dispatch = useContext(WeatherAppDispatch);
    const state = useContext(WeatherAppState);
    const { alert } = state;

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch({ type: 'closeAlert' });
    };

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            open={alert}
            autoHideDuration={2500}
            ContentProps={{
                'aria-describedby': 'message-id',
            }}
            onClose={handleClose}
        >
            <Alert onClose={handleClose} severity='success' className={classes.alert}>
                <span>City added to favourites</span>
            </Alert>
        </Snackbar>
    );
};
