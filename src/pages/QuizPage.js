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
	{'ques': 'I have a strong interest and ability in visual art.', 'options': ['Yes', 'No'], 'cb': ['Art', 'Economics']},
	{'ques': 'I follow the latest political developments with interest.', 'options': ['Yes', 'No'], 'cb': ['Law', 'Engineering']},
	{'ques': 'I like to experiment with better and faster ways of doing things.', 'options': ['Yes', 'No'], 'cb': ['Engineering', 'Literature']},
	{'ques': 'I am concerned about the state of the environment and want to work to improve it.', 'options': ['Yes', 'No'], 'cb': ['Humanities', 'Accounting']},
	{'ques': 'I am interested in helping bodies heal and rehabilitate.', 'options': ['Yes', 'No'], 'cb': ['Medicine', 'Business']},
	{'ques': 'I need the freedom to be creative and express myself.', 'options': ['Yes', 'No'], 'cb': ['Art', 'Medicine']},
	{'ques': 'I am interested in conflict resolution, criminal justice or mediation.', 'options': ['Yes', 'No'], 'cb': ['Law', 'Religion']},
	{'ques': 'I am very ambitious, persuasive, and love coming up with my own ideas.', 'options': ['Yes', 'No'], 'cb': ['Business', 'History']},
	{'ques': 'I like to work with my hands and be outdoors.', 'options': ['Yes', 'No'], 'cb': ['Engineering', 'Finance']},
	{'ques': 'I am interested in science and enjoy helping people.', 'options': ['Yes', 'No'], 'cb': ['Natural Sciences', 'Finance']},
	{'ques': 'I am good with numbers and am detail-oriented.', 'options': ['Yes', 'No'], 'cb': ['Accounting', 'Law']},
	{'ques': 'I want to work with people on the margins of society or who have been oppressed.', 'options': ['Yes', 'No'], 'cb': ['Humanities', 'Business']},
	{'ques': 'I am interested in intellectual ideas, including those that are philosophical or religious.', 'options': ['Yes', 'No'], 'cb': ['Religion', 'CS']},
]




const RadarMap = (props) => {
	return (
		<RadarChart cy = {200} outerRadius={150} width={550} height={380} data={props.data}>
	        <PolarGrid />
	        <PolarAngleAxis dataKey="name" />
	        <PolarRadiusAxis domain ={[0,5]}/>
	        <Radar name="User" dataKey="pts" stroke="#8884d8" fill="#8884d8" fillOpacity={0.9} />
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
			{name: 'Natural Sciences', pts: 1},
			{name: 'Humanities', pts: 1},
			{name: 'Law', pts: 1},
			{name: 'Art', pts: 1},
			{name: 'Religion', pts: 1},
			{name: 'History', pts: 1},
			{name: 'Literature', pts: 1},
			{name: 'CS', pts: 1}
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
									var copyOf = this.state.majorPts
									var index = (selected == 'Yes') ? 0 : 1;
									var major = questions[this.index].cb[index];
									for (var i = 0; i < copyOf.length; i++) {
										if (copyOf[i].name === major){
											copyOf[i].pts+=1;
										}
									}
									this.index+=1
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
