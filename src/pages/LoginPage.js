import React from 'react';
import Login from '../components/Login'
import Navbar from '../components/Navbar'


class LoginPage extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div>
				<Navbar/>
				<Login/>
			</div>
		)
	}
}

export default LoginPage