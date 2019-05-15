import React from 'react';
import Navbar from '../components/Navbar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Fade from '@material-ui/core/Fade'
import Slide from '@material-ui/core/Slide'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MentorCard from '../components/MentorCard'
import Paper from '@material-ui/core/Paper' ;

const styles = theme => ({
});



class MentorPage extends React.Component{
	constructor(props){
		super(props)
		this.mentors = [
		{name: 'Usman Sohail',
        rating: '4.2',
        uni: 'Lahore School of Economics',
        description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        skype: 'xyz.skype.com',
        number: '0213151251',
        email: 'xyz@gmail.com',},
		{name: 'Usman Sohail',
        rating: '4.2',
        uni: 'Lahore School of Economics',
        description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        skype: 'xyz.skype.com',
        number: '0213151251',
        email: 'xyz@gmail.com',},
		{name: 'Usman Sohail',
        rating: '4.2',
        uni: 'Lahore School of Economics',
        description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        skype: 'xyz.skype.com',
        number: '0213151251',
        email: 'xyz@gmail.com',},
		]
	}
	render(){
		const { classes } = this.props
		return (
			<div>
				<Navbar/>
				<Grid container = {true}>
				{this.mentors.map(mentor => (
					<Grid item = {true} xs = {4}>
							<MentorCard data = {mentor}/>
					</Grid>
				))}
				</Grid>
			</div>
		)
	}
}

MentorPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MentorPage)