import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import socket from '../socket'
import firebase from '../firebase'
import * as router from '../router'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import ReactDOM from 'react-dom';
import Navbar from '../components/Navbar'

const styles = theme => ({
 
  paper: {
    marginTop: theme.spacing.unit * 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  buttonContainer: {
    marginLeft: '18%',
    align: 'center',
    size: 'large',
    margin: '100px',
    top: '-100px',
    left: '430px',


  },
});

class Profile extends React.Component{
  constructor(props){
    super(props)
     this.style = this.props.classes
    
  }
  render(){
    const { classes } = this.props
      return (
        <div>
        <Navbar/>

        <Typography component="h1" variant="h2" className={classes.paper}>
          {this.props.msg}
        </Typography>

         <Button variant='contained' color='primary' className={classes.buttonContainer} onClick={router.renderHomePage} >

            Back To Home Page
          </Button>
        </div>
    )

  }

}
Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);