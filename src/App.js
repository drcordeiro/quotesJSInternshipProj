import React, { Component } from 'react';
import './App.css';


import {QuoteContainer} from './components/QuoteCard';



class App extends Component {
  render() {
    return (
      <div className="App">
          <QuoteContainer/>
      </div>
    );
  }
}



export default App;




