import React, { Component } from 'react';
import Title from './components/Title'
import Map from './components/Map'
import AllItems from './contents/AllItems'
import logo from './logo.svg';
import './App.css';

const items = [
  {
    company: 'Technogym',
    startDate:'july 2011',
    endDate:'july 2012',
    role:'Project Manager',
    summary: 'working out a lot',
    active: false,
    open: true,
    current: true,
  },]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title content="Tobia Donati" />
        <AllItems items={items} />
        <Map />
      </div>
    );
  }
}

export default App;
