import React, { Component } from 'react';
import './App.css';
import CocktailContainer from './components/CocktailContainer'
import '../node_modules/semantic-ui/dist/semantic.min.css'
// import { BrowserRouter as Router, Routers} from 'react-router'

class App extends Component {

  render() {

    return (
      <div className="main-wrapper">
        <CocktailContainer />
      </div>
    );
  }
}

export default App;
