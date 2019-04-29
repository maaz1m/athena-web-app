import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'	;
import Typography from '@material-ui/core/Typography'	;
import Grid from '@material-ui/core/Grid'	;
import Navbar from '../components/Navbar'
import Notifications from '../components/Notifications'
import Calendar from '../components/Calendar'
import firebase from '../firebase'

const styles = theme => ({
  root: {
    width: '30%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  paper: {
    marginTop: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    padding: '1px',
  },
  calendar:{
    marginTop: theme.spacing.unit * 8,
  },
  greeting:{
    marginTop: '5%',
    marginLeft: '35%'
  }
});


class HomePage extends React.Component{
	constructor(props){
		super(props)
		this.name = firebase.auth().currentUser.displayName
	}
	render(){
		const { classes } = this.props
		return (
			<div>
		    	<Navbar/>
					<Typography className = {classes.greeting}component="h2" variant="h3">
	        			Hi, {this.name ? this.name.split(' ')[0] : ''}
	      			</Typography>
	      			<Grid container = {true}>
					<Grid item = {true} xs = {12}>
						<div className={classes.root}>
						<Paper className={classes.paper}>
							<Notifications/>
						</Paper>
						</div>
					</Grid>
				</Grid>
			</div>
		)
	}
}

/*<Grid item = {true} xs = {4}>
		<div className = {classes.calendar} >
			<Calendar/>
		</div>
</Grid>*/
HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(HomePage)