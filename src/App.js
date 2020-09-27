import React, { Component } from 'react';

// Import Custom Components
import Header from './components/header/header.component'
import ChartSection from './components/charts/chart.component'

import './App.css';



class App extends Component {
    constructor(props) {
      super();

      this.state = {
        startDate: "",
        endDate: ""
      }
    }

    render() {
      return (
        <div className="App">
          <Header></Header>
          <ChartSection startDate={ this.state.startDate } endDate={ this.state.endDate }></ChartSection>
        </div>
      );
    }
}



export default App;
