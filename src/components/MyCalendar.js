import React from 'react'
import Calendar from 'react-calendar'
import Typography from '@material-ui/core/Typography'	;
import firebase from '../firebase'
class MyCalendar extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			deadline: null,
			date: new Date()
		}
		// this.state.date = new Date(2019, 4, 22)
	}

	componentDidMount(){
		firebase.database().ref('deadline').on('value', snapshot =>{
			var data = snapshot.val()
			var date = data.date.split('-')
			var year = parseInt(date[0])
			var month = parseInt(date[1])
			var day = parseInt(date[2])
			this.setState({date: new Date(year, month, day), deadline: data.name})
		})
	}


	render(){
		return(

			<div>
				<Calendar
				value = {this.state.date}
				/>
			<Typography component="h2" variant="h6">

        		{this.state.deadline ? this.state.deadline + ': ' +(this.state.date.getDate()).toString() + '/ ' + (this.state.date.getMonth() +1).toString() +' / ' + (this.state.date.getFullYear()).toString() : ''}
      		</Typography>
			</div>
		)

	}

}

export default MyCalendar