import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar'
import HomeIcon from '@material-ui/icons/Home';
import HomeGroupIcon from '@material-ui/icons/Search';
import MajorIcon from '@material-ui/icons/School';
import LogOutIcon from '@material-ui/icons/SubdirectoryArrowLeft';
import * as router from '../router'

const styles = {
  avatar: {
    margin: 10
  },
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  fullList: {
    width: 'auto',
  }
};



class Navbar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      open: false
    }
    this.toggleDrawer = () => {
      this.setState({
        open: !this.state.open
        });
      };
  }

  render(){
    const { classes } = this.props
    const fullList = (
      <div className={classes.fullList}>
        <List>
          <ListItem button key={'Home'} onClick = {router.renderHomePage}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItem>
        </List>
        <List>
          <ListItem button key={'Search Universities'} onClick = {router.renderSearchUniversityPage}>
            <ListItemIcon><HomeGroupIcon /></ListItemIcon>
            <ListItemText primary={'Search Universities'} />
          </ListItem>
        </List>
        <List>
          <ListItem button key={'Major Quiz'}  onClick = {router.renderQuizPage} >
            <ListItemIcon><MajorIcon /></ListItemIcon>
            <ListItemText primary={'Major Quiz'} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key={'Log Out'}>
            <ListItemIcon><LogOutIcon /></ListItemIcon>
            <ListItemText primary={'Log Out'} />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={this.toggleDrawer} className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              A T H E N A
            </Typography>
            <Avatar alt = '' src='https://cdn-images-1.medium.com/max/2600/1*gBQxShAkxBp_YPb14CN0Nw.jpeg' className = {classes.avatar}></Avatar>
          </Toolbar>

        </AppBar>
        <Drawer open={this.state.open} onClose={this.toggleDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
          >
            {fullList}
          </div>
        </Drawer>
      </div>
    );   
  }
}


Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);