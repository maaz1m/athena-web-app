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
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 250,
      marginLeft: 'auto',
      marginRight: 'auto'
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
    backgroundColor: 'purple'//theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit,
  },
});

class SearchUni extends React.Component{
  constructor(props){
    super(props)
    this.classes = this.props.classes
    this.socket = this.props.socket
    this.filter = this.props.filter
    this.reset = this.props.reset
    this.state = {
      city: '',
      minSAT: '',
      maxFee: ''
    } 
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }
  handleChange(event){
    this.setState({[event.target.name]: event.target.value})
  }
  handleSubmit(event){
    this.filter(this.state)
    event.preventDefault() 
    // this.socket.emit('SearchUni', this.state)
  }
  handleReset(event){
    this.reset()
    event.preventDefault() 
  }
  render(){
      return (
    <main className={this.classes.main}>
      <CssBaseline />
      <Paper className={this.classes.paper}>
        <form className={this.classes.form}>
          <FormControl margin="normal" required fullWidth>
            <TextField
            id="standard-search"
            label = "City"
            type = "text"
            name = "city"
            className = {this.classes.textField}
            margin="normal"
            onChange = {this.handleChange}
          />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <TextField
            id="standard-search"
            label="Maximum Fee per year"
            type="number"
            name = "maxFee"
            className={this.classes.textField}
            margin="normal"
            onChange = {this.handleChange}
            inputProps = {{min: 0, max: 1000000, step: 10000}}
            InputProps ={{ startAdornment: <InputAdornment position = 'start'> Rs </InputAdornment>}}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <TextField
            id="standard-search"
            label="Minimum SAT"
            type="number"
            name = "minSAT"
            className={this.classes.textField}
            margin="normal"
            inputProps = {{min: 0, max: 1600, step: 100}}
            onChange = {this.handleChange}
          />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick= {this.handleSubmit}
            className={this.classes.submit}
          >
            Filter Universities
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="default"
            onClick= {this.handleReset}
            className={this.classes.submit}
          >
            Reset Search
          </Button>
        </form>
      </Paper>
    </main>
    )

  }
}

SearchUni.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchUni);