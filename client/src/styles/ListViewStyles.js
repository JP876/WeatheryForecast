import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100% !important',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: `${theme.palette.common.grey}3f`,
        borderRadius: '.4rem',
        marginBottom: '1.4rem',

        '& .MuiGridListTile-root': {
            height: '100% !important',
        },

        '& .MuiGridListTileBar-root': {
            background: 'none',
        },
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    info: {
        fontSize: '0.94rem',

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
        padding: '1rem 0',
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
        filter: `contrast(110%) drop-shadow(0px 0px 1.4rem ${theme.palette.common.grey})`,

        [theme.breakpoints.down('sm')]: {
            height: '4.8rem',
        },
    },
    container: {
        textAlign: 'center',
    },
    date: {
        fontSize: '1.26rem',
        fontWeight: theme.typography.fontWeightMedium,
        fontFamily: 'Lobster',
        letterSpacing: '1px',
        padding: '.5rem 0',
        borderBottom: '1px solid #d2d3c9',

        [theme.breakpoints.down('sm')]: {
            fontSize: '.9rem',
        },
    },
    date1: {
        fontSize: '1.2rem',
        fontWeight: theme.typography.fontWeightMedium,
        fontFamily: 'Lobster',
        letterSpacing: '1.6px',
        paddingTop: '.5rem',

        [theme.breakpoints.down('sm')]: {
            fontSize: '.9rem',
        },
    },
}));

export default useStyles;
