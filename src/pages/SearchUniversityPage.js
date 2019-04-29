import React from 'react';
import Navbar from '../components/Navbar'
import UniTable from '../components/UniTable'
import SearchUni from '../components/SearchUni'
import Grid from '@material-ui/core/Grid'
import firebase from 'firebase'


const copy = (ob)=>{
	return JSON.parse(JSON.stringify(ob))
}

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
		return (
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
		)
	}
}

export default SearchUniversityPage