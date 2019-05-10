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


const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: '10px',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class Profile extends React.Component{
  constructor(props){
    super(props)
    this.style = this.props.classes
    this.socket = this.props.socket
    this.state = {
      email: '',
      displayName: '',
      password: '',
      password: '',
      phoneNumber: '',
      universities: '',
      major: '',
      confirmPassword: ''
    } 
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event){
    this.setState({[event.target.name]: event.target.value})
  }
  handleSubmit(event){
    if(this.state.password = this.state.confirmPassword){
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then( () =>{
            var user = firebase.auth().currentUser
            user.updateProfile({
              displayName: this.state.displayName
            })
            firebase.database().ref('user/'+ user.uid).set(this.state)
            router.renderHomePage()
          }
        )
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(error.message)
        });      
    }
    else{
      alert('Passwords do not match')
    }


    event.preventDefault()
    //console.log(this.state, 'submitted')
  }
  render(){
      return (
    <main className={this.style.main}>
      <CssBaseline />
     
      <Paper className={this.style.paper}>
       
        <Typography component="h1" variant="h5">
          Update Profile
        </Typography>
        <form className={this.style.form}>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="displayName">Field Interested In</InputLabel>
            <Input onChange = {this.handleChange} id="displayName" name="displayName" autoFocus />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">High School Name</InputLabel>
            <Input onChange = {this.handleChange} id="email" name="email" autoFocus />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="password">Sat Score</InputLabel>
            <Input onChange = {this.handleChange}  />
          </FormControl>
        
          <form className={this.style.container} noValidate>
          <TextField
              id="date"
              label="Birthday"
              type="date"
              defaultValue="2017-05-24"
              className={this.style.container}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick= {this.handleSubmit}
            className={this.style.submit}
          >
            Save Changes
          </Button>
        </form>
      </Paper>
    </main>
    )

  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);