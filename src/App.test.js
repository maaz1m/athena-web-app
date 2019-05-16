import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/HomePage';
import MentorPage from './pages/MentorPage';
import QuizPage from './pages/QuizPage';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';
import SearchUniversityPage from './pages/SearchUniversityPage';
import MyCalendar from './components/MyCalendar';
import Navbar from './components/Navbar';
import Feedback from './components/Feedback';
import Profile from './components/Profile';
import UniTable from './components/UniTable';
import Notifications from './components/Notifications';

it('Screen Test 1: Landing Page', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LandingPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('Screen Test 2: Login Page', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('Screen Test 3: Signup Page', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignupPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('Screen Test 4: Home Page', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Screen Test 5: Mentor Page', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MentorPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Screen Test 6: University Search Page', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchUniversityPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Component Test 1: Notifications', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Notifications />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('Component Test 2: Navigation bar', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('Component Test 3: Calendar', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyCalendar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('Component Test 4: Feedback Popup', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Feedback />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Component Test 5: University Table', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UniTable />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Component Test 6: Edit Profile', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Profile />, div);
  ReactDOM.unmountComponentAtNode(div);
});
