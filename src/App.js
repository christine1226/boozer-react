import React, { Component } from 'react';
import './App.css';
import CocktailContainer from './components/CocktailContainer'
// import { BrowserRouter as Router, Routers} from 'react-router'

class App extends Component {

  render() {

    return (
      <div className="App">
        <CocktailContainer />
      </div>
    );
  }
}

export default App;
