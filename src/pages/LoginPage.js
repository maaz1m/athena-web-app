import React from 'react';
import Login from '../components/Login'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Fade from '@material-ui/core/Fade'
import Slide from '@material-ui/core/Slide'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	heading:{
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: 'auto',
		marginRight: 'auto',
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
		  width: 400,
		  marginLeft: 'auto',
		  marginRight: 'auto',
		},
		marginTop: '25%'
	}
});



class LoginPage extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		const { classes } = this.props
		return (
			<Grid container = {true}>
				<Grid item = {true} xs = {6}>
					<Typography className = {classes.heading}component="h2" variant="h1">
	        			Welcome to Athena
	      			</Typography>
				</Grid>
				<Grid item = {true} xs = {6}>
					<Fade in = {true}>
						<Login/>
					</Fade>
				</Grid>
			</Grid>
		)
	}
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginPage)