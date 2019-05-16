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
		this.mentors =        this.mentors = [
        {name: 'Sarah Rashid',
        rating: '4.6',
        uni: 'FAST Islamabad',
        img: sarah,
        description: 'I’m a talent acquisition specialist with an interest in building the most effective workforces possible. For over 4 years, I’ve been helping businesses find their perfect hires. I also do consulting on compensation and benefits, new hire processes, and company culture.',
        skype: 'sarah71744',
        number: '+92 333 3151251',
        email: 'sarahrashid98@hotmail.com',},

        {name: 'Zain Ali',
         img: zain,
        rating: '4.1',
        uni: 'University of Central Punjab',
        description: 'I’m a freelance multi-disciplinary graphic designer who’s delivered creative and engaging solutions across brand identity, print, packaging, and digital media. In 2013, my online brand campaign for the Dorsey Children’s Hospital won a GDUSA award, one of the most prestigious honors in the graphic design industry. My work has also been featured in Creatique Bloq, Compound Magazine, and on the Creative Review blog.',
        skype: 'zainnn12',
        number: ' +92 300 8272613',
        email: 'ali.zain14@gmail.com',},

        {name: 'Salman Khurshid',
        rating: '4.5',
        img: salu,
        uni: 'Fatima Memorial Hospital',
        description: 'I am an MBBS student in my 4th year. My focus is on being a neuro surgeon. The human brain and is complexity really fasinates me. I aspire tohave people improve their brains by introducing new methods which would avoid them for losing memories and retaining them for long. I also aim to work in finding better ways to cure Alzheimers.',
        skype: 'salmank99',
        number: '+92 347 5189251',
        email: 'salmankhurshid_95@gmail.com',},

        {name: 'Sahim Bhaur',
        rating: '4.4',
        img: sahim,
        uni: 'Lahore University of Management Sciences',
        description: 'I am a Computer Science stundet at LUMS. I have also been passionate about computers and how they but as a started my ungrad here at LUMS, I realized how difficult programming could be and nearly quit CS 3 times. But a fell in love with it as a progressed and the harder a worked and the more hours I spent on my assignments, it unconciously improved my logical skills without me realizing it. It is a great mind builder and even thouh it be can scary, it surely is a great experience',
        skype: 'bhaur44',
        number: '+92 345 125111',
        email: 'sahimbhaur_97@outlook.com',},
        
        {name: 'Abdul Rafae Noor',
        rating: '3.0',
        img: raf,
        uni: 'Lahore University of Management Sciences',
        description: 'I have over 7 years of experience working in data science. Currently, I work as Asana’s Senior Data Manager, improving products and services for our customers by using advanced analytics, standing up big-data analytical tools, creating and maintaining models, and onboarding compelling new data sets.',
        skype: 'noor127',
        number: '+92 345 189251',
        email: 'abdulrafaenoor11@gmail.com',},
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