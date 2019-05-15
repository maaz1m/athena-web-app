import React from 'react'
import Calendar from 'react-calendar'
import Typography from '@material-ui/core/Typography'	;

class MyCalendar extends React.Component{
	constructor(props){
		super(props)
		console.log(new Date())
		this.date = new Date(2019, 4, 22)
	}


	render(){
		return(

			<div>
				<Calendar
				value = {this.date}
				/>
			<Typography component="h2" variant="h6">
        		SAT Deadline: {(this.date.getDate()).toString() + '/ ' + (this.date.getMonth() +1).toString() +' / ' + (this.date.getFullYear()).toString()}
      		</Typography>
			</div>
		)

	}

}

export default MyCalendar