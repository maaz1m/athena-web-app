import React from 'react';
import Navbar from '../components/Navbar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Fade from '@material-ui/core/Fade'
import Slide from '@material-ui/core/Slide'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MentorCard from '../components/MentorCard'
import salu from '../images/salu.jpg'
import sahim from '../images/sahim.jpg'
import raf from '../images/raf.jpg'
import sarah from '../images/sarah.jpg'
import zain from '../images/zain.jpg'
import Paper from '@material-ui/core/Paper' ;

const styles = theme => ({
});



class MentorPage extends React.Component{
	constructor(props){
		super(props)
		this.mentors = [
		{name: 'Sarah Rashid',
        rating: '4.6',
        uni: 'FAST Islamabad',
        img: sarah,
        description: 'I’m a talent acquisition specialist with an interest in building the most effective workforces possible. For over 20 years, I’ve been helping businesses find their perfect hires. I also do consulting on compensation and benefits, new hire processes, and company culture.',
        skype: 'sarah.skype.com',
        number: '0213151251',
        email: 'sarah@gmail.com',},

		{name: 'Zain Ali',
		 img: zain,
        rating: '4.1',
        uni: 'University of Central Punjab',
        description: 'I’m a freelance multi-disciplinary graphic designer who’s delivered creative and engaging solutions across brand identity, print, packaging, and digital media. In 2013, my online brand campaign for the Dorsey Children’s Hospital won a GDUSA award, one of the most prestigious honors in the graphic design industry. My work has also been featured in Creatique Bloq, Compound Magazine, and on the Creative Review blog.',
        skype: 'zain.skype.com',
        number: '021376896',
        email: 'zain@gmail.com',},

		{name: 'Salman Khurshid',
        rating: '4.5',
        img: salu,
        uni: 'Fatima Memorial Hospital',
        description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        skype: 'salu.skype.com',
        number: '0245189251',
        email: 'salu@gmail.com',},

        {name: 'Sahim Bhaur',
        rating: '4.4',
        img: sahim,
        uni: 'Lahore University of Management Sciences',
        description: 'When I was 21, I climbed Mount Everest. Not metaphorically—I literally climbed the highest mountain on Earth. While I was hiking, I thought about quitting approximately 5,000 times. (And that’s a lowball estimate.) But despite the high winds, low altitude, mental and physical fatigue, and trail mix overdose, I kept going. I’m that person. Once I say I’ll do something, it will happen.',
        skype: 'sahim.skype.com',
        number: '0245189251',
        email: 'sahim@gmail.com',},
		
		{name: 'Abdul Rafae Noor',
        rating: '3.0',
        img: raf,
        uni: 'Lahore University of Management Sciences',
        description: 'I have over 15 years of experience working in data science. Currently, I work as Asana’s Senior Data Manager, improving products and services for our customers by using advanced analytics, standing up big-data analytical tools, creating and maintaining models, and onboarding compelling new data sets.',
        skype: 'raf.skype.com',
        number: '0245189251',
        email: 'raf@gmail.com',},
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