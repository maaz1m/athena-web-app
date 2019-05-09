import React from 'react'
import Calendar from 'react-calendar'

class MyCalendar extends React.Component{
	constructor(props){
		super(props)
	}


	render(){
		return(

			<div>
				<Calendar
				value = {new Date()}
				/>
			</div>
		)

	}

}

export default MyCalendar