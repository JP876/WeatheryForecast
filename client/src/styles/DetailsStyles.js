import { makeStyles } from '@material-ui/core';
import img from '../leaves-pattern.png';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        padding: '1.6rem',
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center center',

        [theme.breakpoints.down('sm')]: {
            padding: '.8rem',
        },
    },
    details: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    divider: {
        width: '100%',
        color: theme.palette.primary,
    },
    buttons: {
        width: '100%',
        margin: '1rem 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    homeBtn: {
        width: '100%',
        marginBottom: '1rem',
        textAlign: 'center',

        '& h4': {
            fontSize: '.8rem',
            marginTop: '.4rem',
            fontWeight: theme.typography.fontWeightLight,
            color: theme.palette.secondary.main,
        },

        '& button': {
            width: '100%',
        },
    },
    check: {
        backgroundColor: theme.palette.primary.main,
    },
    close: {
        backgroundColor: theme.palette.secondary.main,
        textAlign: 'center',
    },
    dialog: {
        padding: '.6rem 1.4rem',
        backgroundColor: 'rgba(0, 0, 0, 0.04)',

        '& h2': {
            fontSize: '1.4rem',
            fontWeight: theme.typography.fontWeightMedium,

            [theme.breakpoints.down('sm')]: {
                fontSize: '1.1rem',
            },
        },
    },
    listItem: {
        '& span': {
            fontFamily: 'Lobster',
            fontSize: '1.4rem',
            letterSpacing: '1.4px',

            [theme.breakpoints.down('sm')]: {
                fontSize: '1.2rem',
            },
        },
    },
    btn: {
        padding: '.2rem 1.4rem',

        '& span': {
            fontSize: '1.1rem',
            fontFamily: 'Lobster',
            letterSpacing: '2px',
            textTransform: 'capitalize',

            [theme.breakpoints.down('sm')]: {
                fontSize: '1rem',
            },
        },
    },
    btnContainer: {
        width: '80%',

        [theme.breakpoints.down('md')]: {
            width: '90%',
        },

        [theme.breakpoints.down('sm')]: {
            width: '95%',
        },
    },
    forecastTitle: {
        paddingTop: '1rem',
        fontSize: '1.6rem',
        fontWeight: theme.typography.fontWeightMedium,
        color: theme.palette.secondary.main,
        borderBottom: `1px solid ${theme.palette.secondary.main}`,
    },
    copyright: {
        marginTop: '1rem',
        textAlign: 'center',

        '& h4': {
            fontWeight: theme.typography.fontWeightMedium,

            '& span': {
                color: theme.palette.primary.main,
            },
        },
    },
    owm: {
        marginBottom: '.2rem',

        '& h4': {
            display: 'inline',
            fontWeight: theme.typography.fontWeightMedium,

            [theme.breakpoints.down('sm')]: {
                fontSize: '.8rem',
            },
        },

        '& a': {
            textDecoration: 'none',
            color: theme.palette.primary.main,
            transition: 'all 200ms ease-in-out',

            '&:hover': {
                color: theme.palette.primary.darker,
            },

            [theme.breakpoints.down('sm')]: {
                fontSize: '.8rem',
            },
        },
    },
    cityData: {
        '& h4': {
            display: 'inline',
            fontWeight: theme.typography.fontWeightMedium,

            [theme.breakpoints.down('sm')]: {
                fontSize: '.8rem',
            },
        },

        '& a': {
            textDecoration: 'none',
            color: theme.palette.primary.main,
            transition: 'all 200ms ease-in-out',

            '&:hover': {
                color: theme.palette.primary.darker,
            },

            [theme.breakpoints.down('sm')]: {
                fontSize: '.8rem',
            },
        },
    },
    progress: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
    },
    toggleBtn: {
        width: '90%',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem 0 .6rem 0',

        '& .MuiTypography-body1': {
            fontSize: '1.1rem',
            fontWeight: '300',
        },
    },
    toggleBtnContainer: {
        width: '100%',
        marginBottom: '1rem',
        display: 'flex',
        justifyContent: 'center',
    },
    animContainer: {
        width: '100%',
    },
    forecastContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

export default useStyles;
