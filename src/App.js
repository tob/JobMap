import React, { Component } from 'react';
import Title from './components/Title'
import Map from './components/Map'
import MainMapBlock from './components/complexMap'
import AllItems from './contents/AllItems'
import {Flex, Box } from 'reflexbox'
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Title content="Tobia Donati" />
        <Flex
        wrap
        w={1}
        style={{ height: '100%' }}
        justify='left' >
        <Box w={1/2} >
                     <AllItems items={items} />
        </Box>
        <Box w={1/2} >
          <MainMapBlock />
        </Box>
        <Box w={1} >
          <Map />
        </Box>
      </Flex>


      </div>
    );
  }
}

export default App;
