import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '80%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
  },
  inline: {
    display: 'inline',
  },
});

class Calendar extends React.Component {
  constructor(props){
    super(props)
    this.deadlines = props.deadlines
    this.deadlines = [
    {date: '26th Aug', msg: 'SAT 2' },
    {date: '5th May', msg: 'LUMS Application' }
    ]
  }
  render(){
    const { classes } = this.props;
    var list = this.deadlines.map( dl =>(<Typography>{dl.date}</Typography>))
    return (
      <div className={classes.root}>
        <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROez1qRDz7m_uedx5KJm3hZXXSqL_kXK7NZfS5ciMrifkeZsJ-'/>
        {list}
      </div>
    );
  }  
}



Calendar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Calendar);