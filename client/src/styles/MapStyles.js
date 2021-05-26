import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    mapid: {
        height: 'calc(100vh - 66px)',
        margin: 0,
        padding: 0,

        '& .leaflet-top.leaflet-right': {
            fontFamily: 'Poppins',
            fontSize: '.95rem',
            fontWeight: '300',

            '& .leaflet-control-layers': {
                border: `2px solid ${theme.palette.common.grey}`,
                padding: '0',
            },

            '& section': {
                '& .leaflet-control-layers-base': {
                    opacity: '0',
                    display: 'none',
                },
                '& .leaflet-control-layers-separator': {
                    opacity: '0',
                    display: 'none',
                },
                '& .leaflet-control-layers-overlays': {
                    '& label': {
                        cursor: 'pointer',

                        '& div': {
                            padding: '.4rem .6rem',
                            borderBottom: `1px solid ${theme.palette.common.grey}`,
                        },

                        '&:hover': {
                            backgroundColor: theme.palette.common.grey1,
                        },
                    },
                },
            },
        },

        [theme.breakpoints.down('sm')]: {
            height: 'calc(100vh - 54px)',
        },
    },
    popup: {
        '& .leaflet-popup-content': {
            margin: '-1px',
        },
        '& .leaflet-popup-content-wrapper': {
            borderRadius: '.4rem',
        },
        '& h4': {
            padding: '.45rem .7rem',
            textAlign: 'center',
            fontFamily: 'Poppins',
            fontSize: '1.1rem',
            fontWeight: theme.typography.fontWeightLight,
            borderBottom: '1px solid #d2d3c9',

            '& span': {
                color: theme.palette.primary.main,
                textTransform: 'uppercase',
            },

            [theme.breakpoints.down('sm')]: {
                fontSize: '.9rem',
            },
        },
    },
    btnMoreInfo: {
        padding: '.2rem .4rem',
        margin: '.5rem 0',
        width: '100%',
        borderRadius: '0',

        '& h5': {
            fontSize: '1.24rem',
            letterSpacing: '1px',
            textTransform: 'capitalize',
            fontFamily: 'Lobster',
            paddingLeft: '.4rem',

            [theme.breakpoints.down('sm')]: {
                fontSize: '1.1rem',
            },
        },
    },
}));

export default useStyles;
