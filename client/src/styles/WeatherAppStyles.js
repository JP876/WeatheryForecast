import { makeStyles } from '@material-ui/core/styles';
import backgroundImg from '../leaves-pattern.png';
import homeImg from '../undraw_my_current_location_om7g.svg';

const drawerWidth = 580;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        [theme.breakpoints.down('md')]: {
            width: `calc(100% - ${drawerWidth * 0.85}px)`,
            marginLeft: drawerWidth * 0.85,
        },
        /* [theme.breakpoints.down('sm')]: {
            width: `calc(100% - ${drawerWidth * 0.7}px)`,
            marginLeft: drawerWidth * 0.7,
        }, */
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,

        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        [theme.breakpoints.down('md')]: {
            width: drawerWidth * 0.85,
        },
        /* [theme.breakpoints.down('sm')]: {
            width: drawerWidth * 0.7,
        }, */
        [theme.breakpoints.down('sm')]: {
            width: '0px',
        },
    },
    drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.down('md')]: {
            width: drawerWidth * 0.85,
        },
        /* [theme.breakpoints.down('sm')]: {
            width: drawerWidth * 0.7,
        }, */
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        height: 'calc(100vh - 64px)',
        padding: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
        [theme.breakpoints.down('md')]: {
            marginLeft: -(drawerWidth * 0.85),
        },
        /* [theme.breakpoints.down('sm')]: {
            marginLeft: -(drawerWidth * 0.7),
        }, */
        [theme.breakpoints.down('sm')]: {
            marginLeft: '0px',
        },
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    title: {
        fontSize: '2rem',
        fontFamily: 'Lobster',
        padding: '.6rem 1rem',

        [theme.breakpoints.down('md')]: {
            fontSize: '1.7rem',
            padding: '0',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.4rem',
            padding: '0',
        },
    },
    icon: {
        fontSize: '1.6rem',

        [theme.breakpoints.down('sm')]: {
            fontSize: '1.4rem',
        },
    },
    intro: {
        height: '100vh',
        backgroundImage: `url(${backgroundImg})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        padding: '0 3rem 6rem 3rem',
        textAlign: 'center',

        [theme.breakpoints.down('sm')]: {
            padding: '0 2rem 6rem 2rem',
        },

        '& h1': {
            fontSize: '1.8rem',
            letterSpacing: '1px',
            lineHeight: '1.6',
            fontWeight: theme.typography.fontWeightMedium,
            marginBottom: '1.4rem',
        },

        '& h4': {
            fontSize: '.86rem',
            fontWeight: theme.typography.fontWeightLight,
            textAlign: 'center',
            color: theme.palette.secondary.main,
            margin: '.6rem 0',
        },

        '& button': {
            width: '60%',
            margin: '-2rem auto 0 auto',
            padding: '.4rem 1.4rem',

            [theme.breakpoints.down('sm')]: {
                width: '80%',
                margin: '-4rem auto 0 auto',
            },

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
    },
    introImg: {
        backgroundImage: `url(${homeImg})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '30rem',
        margin: '0 1rem',

        [theme.breakpoints.down('sm')]: {
            margin: '0',
        },
    },
}));

export { useStyles, drawerWidth };
