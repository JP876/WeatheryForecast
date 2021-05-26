import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    currentInfo: {
        width: '100%',
    },
    info: {
        padding: '.6rem 0',
        display: 'flex',
        justifyContent: 'space-between',

        [theme.breakpoints.down('sm')]: {
            padding: '.5rem 0',
        },
    },
    leftSide: {
        flex: '0 0 48%',
        width: '100%',

        '& h3': {
            padding: '.3rem 0',
            fontWeight: theme.typography.fontWeightMedium,
            textAlign: 'center',

            [theme.breakpoints.down('md')]: {
                fontSize: '.96rem',
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '.9rem',
                padding: '.2rem 0',
            },
        },
        '& span': {
            color: theme.palette.primary.main,
        },
    },
    rightSide: {
        flex: '0 0 48%',
        width: '100%',

        '& h3': {
            padding: '.3rem 0',
            fontWeight: theme.typography.fontWeightMedium,
            textAlign: 'center',

            [theme.breakpoints.down('md')]: {
                fontSize: '.96rem',
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '.9rem',
                padding: '.2rem 0',
            },
        },
        '& span': {
            color: theme.palette.primary.main,
        },
    },
    icon: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '.6rem 0',
        filter: `contrast(140%) drop-shadow(0px 0px 1.4rem ${theme.palette.common.grey})`,

        [theme.breakpoints.down('md')]: {
            padding: '.3rem',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '0',
        },

        '& img': {
            height: '8.4rem',
            width: 'auto',
            margin: '-1rem 0',

            [theme.breakpoints.down('md')]: {
                height: '7rem',
            },
            [theme.breakpoints.down('sm')]: {
                height: '6.2rem',
            },
        },

        '& h3': {
            fontSize: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '.6px',
            fontWeight: theme.typography.fontWeightMedium,
            color: theme.palette.secondary.main,

            [theme.breakpoints.down('md')]: {
                fontSize: '.9rem',
                paddingBottom: '.5rem',
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '.8rem',
                paddingBottom: '.5rem',
            },
        },
    },
    icons: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: '.8rem',
        marginBottom: '-.8rem',

        [theme.breakpoints.down('sm')]: {
            marginBottom: '0',
        },
    },
    cityCountry: {
        fontFamily: 'Lobster',
        fontSize: '2rem',
        display: 'flex',
        paddingRight: '1rem',
        paddingBottom: '.6rem',

        [theme.breakpoints.down('md')]: {
            fontSize: '1.6rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.4rem',
        },
    },
    date: {
        fontSize: '1.36rem',
        letterSpacing: '2px',
        fontWeight: theme.typography.fontWeightLight,
        paddingBottom: '.6rem',

        [theme.breakpoints.down('md')]: {
            fontSize: '1.1rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
        },
    },
    titleContainer: {
        textAlign: 'center',
    },
    forecastTitle: {
        display: 'inline-block',
        paddingTop: '.6rem',
        fontSize: '1.6rem',
        fontWeight: '400',
        color: theme.palette.secondary.main,
        borderBottom: `1px solid ${theme.palette.secondary.main}`,
    },
}));

export default useStyles;
