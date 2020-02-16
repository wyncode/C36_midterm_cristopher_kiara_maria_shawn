import React from 'react';
import './App.css';
import './components/NavBar';
import NavBar from './components/NavBar';
import Navigation from './components/NavBar';
import Button from '@material-ui/core/Button';
import { BrowserRouter, Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/HomePage';
import About from './components/ContactUs';
import Recipes from './components/Recipes';

// class App extends React.Component {
//   state = { serverMessage: '' };

//   componentDidMount() {
//     fetch('/api/demo')
//       .then(response => response.json())
//       .then(data => this.setState({ serverMessage: data.message }));
//   }

//   render() {
export default function App() {
  return (
    <>
      <NavBar>
        <Button>Home Logo</Button>
        <Button>About Us</Button>
        <Button>Search Form</Button>
      </NavBar>
    </>
  );
}
// function PageRoutes() {
//   <div></div>;
// }
