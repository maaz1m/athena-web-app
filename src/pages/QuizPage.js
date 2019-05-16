import React from 'react';
import Question from '../components/Question'
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
import Navbar from '../components/Navbar'
import Grid from '@material-ui/core/Grid'
import * as router from '../router.js'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper' ;

const half = {
	'width': '50%'
}

const styles = theme => ({
	chartbg: {
		width: '550px',
		marginTop: '20px',
		marginLeft: '50px',
		height: '390px',
		opacity: '0.9',

	}
});


var questions = [
	{'ques': 'I especially love working with children.', 'options': ['Yes', 'No'], 'cb': ['Engineering', 'Medicine']},
	{'ques': 'I am interested in law, debate, government, and politics.', 'options': ['Yes', 'No']},
	{'ques': 'I have a strong interest and ability in visual art.', 'options': ['Yes', 'No']},
	{'ques': 'I am always reading a book or writing my own stories.', 'options': ['Yes', 'No']},
	{'ques': 'I like to experiment with better and faster ways of doing things.', 'options': ['Yes', 'No']},
	{'ques': 'I am concerned about the state of the environment and want to work to improve it.', 'options': ['Yes', 'No']},
	{'ques': 'I am interested in helping bodies heal and rehabilitate.', 'options': ['Yes', 'No']},
	{'ques': 'I am interested in technology and learning how computers work.', 'options': ['Yes', 'No']},
	{'ques': 'I enjoy learning about different parts of the world.', 'options': ['Yes', 'No']},
	{'ques': 'I enjoy working with people, and I have strong verbal and written communication skills.', 'options': ['Yes', 'No']},
	// {'ques': 'I enjoy learning about how the human body and natural world work.', 'options': ['Yes', 'No']},
	// {'ques': 'I need the freedom to be creative and express myself.', 'options': ['Yes', 'No']},
	// {'ques': 'I am interested in conflict resolution, criminal justice or mediation.', 'options': ['Yes', 'No']},
	// {'ques': 'I am very ambitious, persuasive, and love coming up with my own ideas.', 'options': ['Yes', 'No']},
	// {'ques': 'I like to work with my hands and be outdoors.', 'options': ['Yes', 'No']},
	// {'ques': 'I like math and figuring out how things work.', 'options': ['Yes', 'No']},
	// {'ques': 'I enjoy learning about languages.', 'options': ['Yes', 'No']},
	// {'ques': 'I am interested in science and enjoy helping people.', 'options': ['Yes', 'No']},
	// {'ques': 'I enjoy performing as an actor, or working behind the scenes on theatrical productions.', 'options': ['Yes', 'No']},
	// {'ques': 'I am good with numbers and am detail-oriented.', 'options': ['Yes', 'No']},
	// {'ques': 'I like to sing and/or play musical instruments.', 'options': ['Yes', 'No']},
	// {'ques': 'I want to work with people on the margins of society or who have been oppressed.', 'options': ['Yes', 'No']},
	// {'ques': 'I am interested in graphic and/or Web design.', 'options': ['Yes', 'No']},
	// {'ques': 'I like to offer advice to others.', 'options': ['Yes', 'No']},
	// {'ques': 'I am interested in intellectual ideas, including those that are philosophical or religious.', 'options': ['Yes', 'No']},
	// {'ques': 'I am interested in filmmaking and media production.', 'options': ['Yes', 'No']},
	// {'ques': 'I love sports', 'options': ['Yes', 'No']}
]

const RadarMap = (props) => {
	return (
		<RadarChart cy = {200} outerRadius={150} width={550} height={350} data={props.data}>
	        <PolarGrid />
	        <PolarAngleAxis dataKey="name" />
	        <PolarRadiusAxis domain ={[0,5]}/>
	        <Radar name="User" dataKey="pts" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
		</RadarChart>
	)

}

const getHighest = majors => {
	var max = 0
	var major = ''
	for (var i = 0; i < majors.length; i++) {
		if(majors[i].pts > max){
			max = majors[i].pts
			major = majors[i].name
		}	
	}
	return major
}

class QuizPage extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			question: questions[0],
		 	majorPts: [
		  	{name: 'Engineering', pts: 1},
			{name: 'Medicine', pts: 1},
			{name: 'Business', pts: 1},
			{name: 'Accounting', pts: 1},
			{name: 'Finance', pts: 1},
			{name: 'Economics', pts: 1},
			{name: 'Natural Science', pts: 1},
			{name: 'Humanities', pts: 1},
			{name: 'Law', pts: 1}
			]
		}
		
		this.index = 0
	}
	render(){
		const { classes } = this.props
		return (
			<div>
				<Navbar/>
				<Grid container = {true}>
					<Grid item = {true} xs = {6}>
						<Question question = {this.state.question} change = {(selected)=>{
							if(selected){
								if(this.index === questions.length-1){
									var maxPts = 0
									var maxMjr = ''
									for (var i = 0; i < this.state.majorPts.length; i++) {
										if(this.state.majorPts[i].pts > maxPts){
											maxPts = this.state.majorPts[i].pts
											maxMjr = this.state.majorPts[i].name
										}
									}
									router.renderSuccessMsg(maxMjr + ' is the choice for you !')
								} else{
									this.index+=1
									var copyOf = this.state.majorPts 
									var majorIndex = Math.floor(Math.random()*8)
									copyOf[majorIndex].pts += 1;
									this.setState({'question': questions[this.index], 'majorPts': copyOf})
								}
							}
						}}/>
					</Grid>
					<Grid item = {true} xs = {6} >
						<Paper square elevation = {0} className = {classes.chartbg}>
						<RadarMap data = {this.state.majorPts.slice()} />
						</Paper>
					</Grid>
				</Grid>	
			</div>
		)
	}
}

QuizPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QuizPage)
