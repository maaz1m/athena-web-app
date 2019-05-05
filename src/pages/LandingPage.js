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
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import lums from '../images/lums.jpg';
import iba from '../images/iba.jpg';
import UCP from '../images/UCP.jpg';
//import bg from '../images/bg.jpg';
import bg from '../images/mainp.jpg';


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
  paperUni: {
   
    alignItems: 'left',
    padding: '1px',
    boxShadow: '2px 2px grey',
   
  },
  calendar:{
    marginTop: theme.spacing.unit * 8,
  },
  greeting:{
    marginTop: '3%',
    marginLeft: '15%',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '2px 2px black',
    width: "27%",
    paddingTop: "90px",
    letterSpacing: "4px",
    lineSpacing: "40px",
    lineHeight: "60px",
  },
  roottt: {
  	width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
  
  },

	  title: {
	    color: theme.palette.primary.light,
	  },
	  titleBar: {
	     color: theme.palette.primary.light,
	    //  'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
	  },
	  pictures: {
	  position: 'absolute',
	  top: '370px',

		},
	uniimg: {
		height: '300px',
		width: '600px',
		boxShadow: '5' ,
		boxShadow: '10',
	},
	paperContainer: {
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        paddingTop: theme.spacing.unit * 2,
    	paddingBottom: theme.spacing.unit * 2,
    },
    button: {
    //margin: theme.spacing.unit,
    marginLeft: '30%',
    marginTop: '17%',
    align: 'center',
    size: 'large',
    margin: '100px',
    top: '-130px',
    left: '60px',
  	},

  	divider: {
   
    height: '100px',
    display: 'inline-block',
    margin: '-150px',
	},

	text: {
		letterSpacing: '7px',
	}

});





const tileData = [
{
  img: lums,
  title: 'LUMS',
  
},
	 {
  img: UCP,
  title: 'UCP',

},
 {
  img: iba,
  title: 'IBA',
},

];




class LandingPage extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		const { classes } = this.props
		return (
			<Paper className={classes.paperContainer}>
				<AppBar position="static" color="default">
		        	<Toolbar>
		          		<Typography className={classes.text} variant="h5" color="inherit">
		           			Athena
		          		</Typography>
		        	</Toolbar>
		      </AppBar>
				<div>	
						<Typography className = {classes.greeting} variant="h3" marginTop="30%" >
		        			Welcome to The 	World's Largest College Forum.
		        		
						</Typography>	
						
		      		
							<div>
								<Button variant="contained" className={classes.button} color="primary">
									<Typography variant="h6" color='textSecondary'>
			        					Sign up
			        				</Typography>
								</Button>
									<div className= {classes.divider}/>
								<Button variant="contained" className={classes.button} color="secondary">
									<Typography variant="h6" >
			        					Sign in
			        				</Typography>
								</Button>
							</div>
				</div>
			</Paper>
		
    	
		)
	}
}

/*<Grid item = {true} xs = {4}>
		<div className = {classes.calendar} >
			<Calendar/>
		</div>
</Grid>*/

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(LandingPage)