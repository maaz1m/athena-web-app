import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'	;
import Typography from '@material-ui/core/Typography'	;
import Grid from '@material-ui/core/Grid'	;
import Navbar from '../components/Navbar'
import Notifications from '../components/Notifications'
import YourUniversities from '../components/YourUniversities'
import MyCalendar from '../components/MyCalendar'
import firebase from '../firebase'

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import lums from '../images/lums.jpg';
import iba from '../images/iba.jpg';
import UCP from '../images/UCP.jpg';
import bg from '../images/bg.jpg';


const styles = theme => ({
  root: {
    width: '90%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    padding: '1px',
  },
  calendar:{
    marginTop: theme.spacing.unit * 8,
  },
  greeting:{
    marginTop: '2%',
    marginBottom: '10px',
    marginLeft: '35%'
  },

});









class HomePage extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		const { classes } = this.props
		return (
			<div>
		    	<Navbar/>
				<Typography className = {classes.greeting} component="h2" variant="h3">
        			Hi, {this.name ? this.name.split(' ')[0] : ''}
      			</Typography>
      			<Grid container = {true}>
					<Grid item = {true} xs = {4}>

						<div className={classes.root}>
					    	<Typography variant = 'h6' >  Your Universities </Typography>
							<YourUniversities/>
						</div>
					</Grid>
					<Grid item = {true} xs = {4}>
						<div className={classes.root}>
					    	<Typography variant = 'h6' >  Your Messages </Typography>
							<Paper className={classes.paper}>
								<Notifications/>
							</Paper>
						</div>
					</Grid>
					<Grid item = {true} xs = {4}>
						<div className={classes.root}>
					    	<Typography variant = 'h6' >  Your Deadlines </Typography>
							<MyCalendar/>
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