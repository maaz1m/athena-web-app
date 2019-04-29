import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';




const styles = theme => ({
  root: {
    width: '70%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 300,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class Question extends React.Component {
  state = {};

  handleChange = event => {
    if (this.state === {}){
      this.setState({ value: event.target.value });
    }
      this.props.change(event.target.value)

  };

  render() {
    const { classes } = this.props;
    var question = this.props.question.ques
    var options = this.props.question.options.map(op => (
      <FormControlLabel value= {op} control={<Radio />} label={op} />
    ))
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h6">
            {question}
          </Typography>

          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
              aria-label="Question"
              className={classes.group}
              onClick={this.handleChange}
            >  
            {options}
            </RadioGroup>
          </FormControl>
        </Paper>
      </div>
    );
  }
}

Question.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Question);