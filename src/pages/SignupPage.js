import React from 'react';
import Signup from '../components/Signup'
import Navbar from '../components/Navbar'


class SignupPage extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div>
				<Navbar/>
				<Signup/>
			</div>
		)
	}
}

export default SignupPage