import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    p0: {
        '& .MuiBox-root': {
            padding: '0',
            overflow: 'hidden',
        },
    },
    root: {
        padding: '0',
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    tab: {
        padding: '0',
        minWidth: '3rem',

        '& .MuiTab-wrapper': {
            fontSize: '1.14rem',
            padding: '.4rem 2rem',
            fontWeight: theme.typography.fontWeightLight,

            [theme.breakpoints.down('md')]: {
                fontSize: '.9rem',
            },
        },
    },
    alert: {
        backgroundColor: theme.palette.primary.main,

        '& span': {
            fontSize: '1rem',
            letterSpacing: '.5px',
        },
    },
}));

export default useStyles;
