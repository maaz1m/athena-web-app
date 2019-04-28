import React from 'react';
import Question from '../components/Question'
import Navbar from '../components/Navbar'

var questions = [
	{'ques': 'I especially love working with children.', 'options': ['Yes', 'No', 'Not sure']},
	{'ques': 'I am interested in law, debate, government, and politics.', 'options': ['Yes', 'No']},
	{'ques': 'I have a strong interest and ability in visual art.', 'options': ['Yes', 'No']},
	{'ques': 'I am always reading a book or writing my own stories.', 'options': ['Yes', 'No', 'Just reading']},
	{'ques': 'I like to experiment with better and faster ways of doing things.', 'options': ['Yes', 'No']},
	{'ques': 'I am concerned about the state of the environment and want to work to improve it.', 'options': ['Yes', 'No']},
	{'ques': 'I am interested in helping bodies heal and rehabilitate.', 'options': ['Yes', 'No']},
	{'ques': 'I am interested in technology and learning how computers work.', 'options': ['Yes', 'No']},
	{'ques': 'I enjoy learning about different parts of the world.', 'options': ['Yes', 'No']},
	{'ques': 'I enjoy working with people, and I have strong verbal and written communication skills.', 'options': ['Yes', 'No']},
	{'ques': 'I enjoy learning about how the human body and natural world work.', 'options': ['Yes', 'No']},
	{'ques': 'I need the freedom to be creative and express myself.', 'options': ['Yes', 'No']},
	{'ques': 'I am interested in conflict resolution, criminal justice or mediation.', 'options': ['Yes', 'No']},
	{'ques': 'I am very ambitious, persuasive, and love coming up with my own ideas.', 'options': ['Yes', 'No']},
	{'ques': 'I like to work with my hands and be outdoors.', 'options': ['Yes', 'No']},
	{'ques': 'I like math and figuring out how things work.', 'options': ['Yes', 'No']},
	{'ques': 'I enjoy learning about languages.', 'options': ['Yes', 'No']},
	{'ques': 'I am interested in science and enjoy helping people.', 'options': ['Yes', 'No']},
	{'ques': 'I enjoy performing as an actor, or working behind the scenes on theatrical productions.', 'options': ['Yes', 'No']},
	{'ques': 'I am good with numbers and am detail-oriented.', 'options': ['Yes', 'No']},
	{'ques': 'I like to sing and/or play musical instruments.', 'options': ['Yes', 'No']},
	{'ques': 'I want to work with people on the margins of society or who have been oppressed.', 'options': ['Yes', 'No']},
	{'ques': 'I am interested in graphic and/or Web design.', 'options': ['Yes', 'No']},
	{'ques': 'I like to offer advice to others.', 'options': ['Yes', 'No']},
	{'ques': 'I am interested in intellectual ideas, including those that are philosophical or religious.', 'options': ['Yes', 'No']},
	{'ques': 'I am interested in filmmaking and media production.', 'options': ['Yes', 'No']},
	{'ques': 'I love sports', 'options': ['Yes', 'No']}
]


class QuizPage extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			'question': questions[0]
		}
		this.index = 0
	}
	render(){
		return (
			<div>
				<Navbar/>
				<Question question = {this.state.question} change = {(selected)=>{
					this.index+=1
					this.setState({'question': questions[this.index]})
				}}/>
			</div>
		)
	}
}

export default QuizPage