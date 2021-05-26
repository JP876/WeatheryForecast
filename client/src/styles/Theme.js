import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 480,
            md: 660,
            lg: 1280,
            xl: 1920,
        },
    },
    palette: {
        common: {
            grey: '#d2d3c9',
            grey1: '#e9eae5',
            orange: '#f6830f',
        },
        primary: {
            main: '#0e918c',
            dark: '#0d827d',
            darker: '#085350',
        },
        secondary: {
            main: '#bb2205',
        },
        background: {
            paper: '#f9f9f8',
            default: '#f1f2ee',
        },
        text: {
            primary: '#434437',
            disabled: '#303128',
        },
        success: {
            main: '#11b0aa',
        },
    },
    typography: {
        fontFamily: 'Poppins',
        fontWeightLight: 300,
        fontWeightMedium: 400,
        fontWeightBold: 500,

        currentInfoSides: {
            flex: '0 0 48%',
            width: '100%',

            '& h3': {
                padding: '.3rem 0',
                fontWeight: '400',
                textAlign: 'center',
            },
        },
    },
});
