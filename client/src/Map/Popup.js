import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Button from '@material-ui/core/Button';
import { Popup } from 'react-leaflet';
import useStyles from '../styles/MapStyles';

const PopupComp = props => {
    const classes = useStyles();
    const { lat, lng, city, country, population, handleClick } = props;

    return (
        <Popup closeButton={false} key={[lat, lng]} className={classes.popup}>
            <h4>
                City: <span>{city}</span>
            </h4>
            <h4>
                Country: <span>{country}</span>
            </h4>
            <h4>
                Population: <span>{Number(population).toLocaleString()}</span>
            </h4>
            <Button
                className={classes.btnMoreInfo}
                variant='contained'
                color='primary'
                size='medium'
                onClick={() => {
                    handleClick(city, country);
                }}
            >
                <InfoOutlinedIcon />
                <h5>Weather Info</h5>
            </Button>
        </Popup>
    );
};

export default PopupComp;
