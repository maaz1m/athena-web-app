import React from 'react';
import Navbar from '../components/Navbar'
import UniTable from '../components/UniTable'
import SearchUni from '../components/SearchUni'
import Grid from '@material-ui/core/Grid'
import firebase from 'firebase'
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper' ;
import { withStyles } from '@material-ui/core/styles';
import Feedback from '../components/Feedback'

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
})
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
			data: this.allUnis,
      open: false
		}
	}
	render(){
    const { classes } = this.props
		return (
			<div >
				<Navbar/>
				<Grid container = {true}>
					<Grid item = {true} xs={4}>
						<SearchUni
            filter = {(args) =>{
							var copyOfData = copy(this.allUnis)
              var minSAT = parseInt(args.minSAT)
              var maxFee = parseInt(args.maxFee)
              var city = args.city
              for (var key in copyOfData){
                let uni = copyOfData[key]
                if (!isNaN(minSAT) && uni.minSAT < minSAT){
                  
                  delete copyOfData[key]

                } else if (city != '' && uni.city.toUpperCase() != args.city.toUpperCase()){
                  
                  delete copyOfData[key]

                }else if (!isNaN(maxFee) && uni.fee > maxFee){

                  delete copyOfData[key]
                }
              }
							this.setState({data: copyOfData})
						}}
            reset = {()=>{
                this.setState({data: this.allUnis})
              }
            }
            />				
					</Grid>
					<Grid item = {true} xs={8}>
						<UniTable data = {this.state.data} add = { id =>{
                var data = this.state.data
                var uniToAdd = JSON.parse(JSON.stringify(data[id])) 
                delete data[id]
                this.setState({data: data})
                var user = firebase.auth().currentUser
                var uni = {}
                uni[id] = uniToAdd
                firebase.database().ref('user/'+ user.uid + '/universities').update(uni)
                delete this.allUnis[id]
                this.setState({open: true})
              }
            }/>
					</Grid>
				</Grid>
        <Feedback open = {this.state.open} msg = 'Added to favourites'/>
			</div>
		)
	}
}
SearchUniversityPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SearchUniversityPage)