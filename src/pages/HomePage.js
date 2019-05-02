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

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import lums from './lums.jpg';
import iba from './iba.jpg';
import UCP from './UCP.jpg';


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
  },
  roottt: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    alignItems: 'baseline',
    justify: 'space-evenly',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
     color: theme.palette.primary.light,
    //  'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
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
				<div  className={classes.roottt} >
			<div>	
				<Typography component="h2" variant="h3">
	        			Partnered Universities
	      		</Typography>
	      	</div>
	      <GridList className={classes.gridList} rows={2.5} cols={2.5}>

	        {tileData.map(tile => (
	          <GridListTile key={tile.img}>
	            <img src={tile.img} alt={tile.title} />
	            <GridListTileBar
	              title={tile.title}
	              classes={{
	                root: classes.titleBar,
	                title: classes.title,
	              }}
	              actionIcon={
	                <IconButton>
	                  <StarBorderIcon className={classes.title} />
	                </IconButton>
	              }
	            />
	          </GridListTile>
	        ))}
	      </GridList>
    	</div>
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