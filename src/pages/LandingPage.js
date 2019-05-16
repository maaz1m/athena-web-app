import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'	;
import Typography from '@material-ui/core/Typography'	;
import Grid from '@material-ui/core/Grid'	;
import Navbar from '../components/Navbar'
import Notifications from '../components/Notifications'
import firebase from '../firebase'
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import background from '../images/landing.jpg'
import * as router from '../router'


const styles = theme => ({
  greeting:{
    marginTop: '10%',
    marginLeft: '10%',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '2px 2px black',
    width: "35%",
    paddingTop: "90px",
    letterSpacing: "4px",
    lineSpacing: "40px",
    lineHeight: "60px",
  },
	paperContainer: {
        height: '800px',
        backgroundImage: `url(${background})`,
        paddingTop: theme.spacing.unit * 2,
      	paddingBottom: theme.spacing.unit * 2,
    },
    button: {
      margin: theme.spacing.unit,
      size: 'large',
  	},

	text: {
		letterSpacing: '7px',
	},
  buttonContainer: {
    marginLeft: '18%',
    align: 'center',
    size: 'large',
    margin: '100px',
    top: '-100px',
    left: '60px',

  },

});






class LandingPage extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		const { classes } = this.props
		return (
			<Paper className={classes.paperContainer}>
				<div>	
						<Typography className = {classes.greeting} variant="h2" marginTop="30%" >
		        			Welcome to Pakistan's Largest College Forum.		        		
						</Typography>	
            <div className={classes.buttonContainer}>
              <Button variant='contained' className={classes.button} onClick={router.renderLoginPage} >
                Login
              </Button>
              <Button variant='contained' className={classes.button} onClick={router.renderSignupPage} >
                Signup
              </Button>
            </div>
		      		
				</div>
			</Paper>
		
    	
		)
	}
}


LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(LandingPage)