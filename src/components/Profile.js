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
    marginTop: theme.spacing.unit * 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
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

const majors = 
      [
      {name: 'Engineering'},
      {name: 'Medicine'},
      {name: 'Business'},
      {name: 'Accounting'},
      {name: 'Finance'},
      {name: 'Economics'},
      {name: 'Natural Science'},
      {name: 'Humanities'},
      {name: 'Law'}
      ]
class Profile extends React.Component{
  constructor(props){
    super(props)
    this.style = this.props.classes
    this.socket = this.props.socket
    this.state = {
      dob: '',
      field: '',
      hSchool: '',
      satScr: '',
      
    } 
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event){
    this.setState({[event.target.name]: event.target.value})
  }
  handleSubmit(event){
    console.log(this.state)
    var user = firebase.auth().currentUser
    firebase.database().ref('user/'+ user.uid).update(this.state)



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
        <FormControl fullWidth>
          <InputLabel htmlFor="field">Field</InputLabel>
          <Select
            value={this.state.field}
            onChange={this.handleChange}
            inputProps={{
              name: 'field',
              id: 'field',
            }}
          >
        
            <MenuItem value={"Law"}>Law</MenuItem>
            <MenuItem value={"Engineering"}>Engineering</MenuItem>
            <MenuItem value={"Medicine"}>Medicine</MenuItem>
            <MenuItem value={"Business"}>Business</MenuItem>
            <MenuItem value={"Accounting"}>Accounting</MenuItem>
            <MenuItem value={"Finance"}>Finance</MenuItem>
            <MenuItem value={"Economics"}>Economics</MenuItem>
            <MenuItem value={"Natural"}>Natural Science</MenuItem>
            <MenuItem value={"Humanities"}>Humanities</MenuItem>
          </Select>
        </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="hSchool">High School Name</InputLabel>
            <Input onChange = {this.handleChange} id="hSchool" name="hSchool" autoFocus />
          </FormControl>  
          <FormControl fullWidth>
            <TextField
            id="standard-search"
            label="Sat Score"
            type="number"
            name = "satScr"
            inputProps = {{min: 0, max: 1600, step: 1}}
            onChange = {this.handleChange}
          />
          </FormControl>
          
          <TextField
              label="Birthday"
              type="date"
              defaultValue="2017-05-24"
               onChange = {this.handleChange}
              id="dob"
              name="dob"
              value={this.state.dob}
              className={this.style.container}
              InputLabelProps={{
              shrink: true,
              }}
           
            />

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