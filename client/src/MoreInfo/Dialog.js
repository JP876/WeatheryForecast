import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from '../styles/DetailsStyles';

const DialogComponent = props => {
    const { dialog, closeDialog, handleDeleteClick } = props;
    const classes = useStyles();

    return (
        <Dialog open={dialog} aria-labelledby='delete-dialog-title' onClose={closeDialog}>
            <DialogTitle id='delete-dialog-title' className={classes.dialog}>
                Remove city <br></br> from favourites ?
            </DialogTitle>
            <List>
                <ListItem button onClick={handleDeleteClick} className={classes.listItem}>
                    <ListItemAvatar>
                        <Avatar className={classes.check}>
                            <CheckIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary='Delete' />
                </ListItem>
                <ListItem button onClick={closeDialog} className={classes.listItem}>
                    <ListItemAvatar>
                        <Avatar className={classes.close}>
                            <CloseIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary='Cancel' />
                </ListItem>
            </List>
        </Dialog>
    );
};

export default DialogComponent;
