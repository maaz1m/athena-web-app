import React from 'react';
import ReactDOM from 'react-dom';
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import QuizPage from './pages/QuizPage'
import Loading from './components/Loading'
import SearchUniversityPage from './pages/SearchUniversityPage'
import HomePage from './pages/HomePage'
import firebase from './firebase'


const container = document.getElementById('root')

const showLoading = ()=>{
	setTimeout(()=>{
		ReactDOM.render(<Loading/> , container)			
	}, 1)
}

const renderSignupPage = ()=>{
	ReactDOM.render(<SignupPage/> , container)

}

const renderHomePage = ()=>{
	ReactDOM.render(<HomePage/> , container)
}

const renderSearchUniversityPage = ()=>{
	ReactDOM.render(<SearchUniversityPage/> , container)
}

const renderLoginPage = ()=>{
	ReactDOM.render(<LoginPage/> , container)
}

const renderQuizPage = ()=>{
	ReactDOM.render(<QuizPage/> , container)
}

export {renderSignupPage, renderLoginPage, renderSearchUniversityPage, renderQuizPage, renderHomePage}