import React from 'react';
import './App.css';
import './components/NavBar';
import NavBar from './components/NavBar';
// import Navigation from './components/NavBar';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SearchTacos from './components/HomePage';
import About from './components/AboutUs';
import TacoRecipes from './components/TacoRecipes';

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
      <Router>
        <NavBar>
          <Button>Home Logo</Button>
          <Button>About Us</Button>
          <Button>Search Form</Button>
        </NavBar>
        <Switch>
          <Route exact path="/">
            <SearchTacos />
          </Route>
          <Route path="/recipes">
            <TacoRecipes />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
// function PageRoutes() {
//   <div></div>;
// }
//   }
// }
