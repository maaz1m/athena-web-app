import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import logo from '../logo.png'
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300
  },
  inline: {
    display: 'inline',
  },
});

class Notifications extends React.Component {
  constructor(props){
    super(props)
    this.notifs = props.notifs
    this.notifs = [
    {name: 'Team Athena', msg: 'A very warm welcome from all of us here at Athena', img:'https://png.pngtree.com/element_pic/17/01/07/9e841a6c76489bab75e9311b5d8c5ca3.jpg' }
    ]
  }
  render(){
    const { classes } = this.props;
    var list = this.notifs.map( notif =>(<ListItem key = {notif.name} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar src={notif.img} />
          </ListItemAvatar>
          <ListItemText
            primary={notif.name}
            secondary={
              <React.Fragment>
                {notif.msg}
              </React.Fragment>
            }
          />
        </ListItem>))
    return (
      <List className={classes.root}>
        {list}
      </List>
    );
  }  
}



Notifications.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Notifications);