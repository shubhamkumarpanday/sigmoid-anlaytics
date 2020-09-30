import React, { Component } from 'react';

// Import Custom Components
import Header from './components/header/header.component'
import ChartSection from './components/charts/chart.component'

import './App.css';

class App extends Component {

    render() {
      return (
        <div className="App">
          <Header></Header>
          <ChartSection />
        </div>
      );
    }
}



export default App;
