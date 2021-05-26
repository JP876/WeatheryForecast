import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    tooltip: {
        textAlign: 'center',
    },
    info: {
        fontSize: '0.84rem',

        [theme.breakpoints.down('sm')]: {
            fontSize: '0.7rem',
        },

        '& h4': {
            fontWeight: theme.typography.fontWeightMedium,
            padding: '0.3rem .6rem',
            borderTop: '1px solid #d2d3c9',
        },
        '& span': {
            color: theme.palette.primary.main,
        },
    },
    descriptionIcon: {
        textTransform: 'uppercase',
        padding: '1rem .5rem',
        color: theme.palette.secondary.main,
        fontWeight: theme.typography.fontWeightMedium,

        [theme.breakpoints.down('sm')]: {
            fontSize: '.8rem',
            marginBottom: '-.5rem',
        },
    },
    iconImg: {
        marginBottom: '-2rem',
        height: '6rem',
        width: 'auto',

        [theme.breakpoints.down('sm')]: {
            height: '4.8rem',
        },
    },
}));

export default useStyles;
