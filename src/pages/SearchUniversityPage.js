import React from 'react';
import Navbar from '../components/Navbar'
import UniTable from '../components/UniTable'
import SearchUni from '../components/SearchUni'
import Grid from '@material-ui/core/Grid'
import firebase from 'firebase'
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper' ;
import { withStyles } from '@material-ui/core/styles';


import lums from '../images/lums.jpg';
import iba from '../images/iba.jpg';
import UCP from '../images/UCP.jpg';
import bg from '../images/bg.jpg';

const copy = (ob)=>{
	return JSON.parse(JSON.stringify(ob))
}

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
    marginTop: '5%',
    marginLeft: '35%'
  },
  roottt: {
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
  
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  
    justify: 'space-evenly',
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
    },

});
// const filterUniversities = args => {
// 	var copyOfData = copy(obj)
// 	for(var key in copyOfData){
// 		if(copyOfData[].minSAT)
// 	}
// }

class SearchUniversityPage extends React.Component{
	constructor(props){
		super(props)
    firebase.database().ref('uni') 
    .once('value').then(snapshot =>{
      this.allUnis = snapshot.val()
      this.setState({data: this.allUnis})
    }).catch(error =>{
      console.log(error)
    })
		this.state = {
			data: this.allUnis
		}
	}
	render(){
    const { classes } = this.props
		return (
      <Paper className={classes.paperContainer}>
			<div >
				<Navbar/>
				<Grid container = {true}>
					<Grid item = {true} xs={4}>
						<SearchUni filter = {(args) =>{
							var copyOfData = copy(this.allUnis)
              var minSAT = parseInt(args.minSAT)
              var maxFee = parseInt(args.maxFee)
              var city = args.city
              for (var key in copyOfData){
                let uni = copyOfData[key]
                if (!isNaN(minSAT) && uni.minSAT > minSAT){
                  
                  delete copyOfData[key]

                } else if (city != '' && uni.city != args.city){
                  
                  delete copyOfData[key]

                }else if (!isNaN(maxFee) && uni.fee > maxFee){

                  delete copyOfData[key]
                }
              }
							this.setState({data: copyOfData})
						}} />				
					</Grid>
					<Grid item = {true} xs={8}>
						<UniTable data = {this.state.data} add = { id =>{
                this.setState({data: this.allUnis})
                var user = firebase.auth().currentUser
                var uni = {}
                uni[id] = this.allUnis[id]
                firebase.database().ref('user/'+ user.uid + '/universities').set(uni)
                delete this.allUnis[id]
              }
            }/>
					</Grid>
				</Grid>
			</div>
      </Paper>
		)
	}
}
SearchUniversityPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SearchUniversityPage)