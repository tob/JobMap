import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Title from './components/Title'
import Map from './components/Map'
import AllItems from './contents/AllItems'
import {Flex, Box } from 'reflexbox'
import fetchItems from './actions/items/fetch'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/theme'
import AppBar from 'material-ui/AppBar';
import DatePicker from 'material-ui/DatePicker';

import './App.css'



class App extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    fetchItems: PropTypes.func.isRequired,
  }



  static childContextTypes = {
   muiTheme: PropTypes.object.isRequired,
 }

 getChildContext() {
   return { muiTheme }
 }

  componentWillMount() {
    this.props.items
  }

  render() {
    const items = [{items}]

    return (
            <MuiThemeProvider muiTheme={muiTheme}>
              <div className="App">
                
                <Title content="Tobia Donati" />
                <Flex
                  wrap
                  w={1}
                  style={{ height: '100%' }}
                  justify='left' >
                  <Box w={1/2} >
                  <DatePicker
                    hintText="Open to Year"
                    openToYearSelection={true}
                    disabled={false}
                    container='inline' />
                    <AllItems items={items} />
                  </Box>
                  <Box w={1/2} >
                    <Map items={items}/>
                  </Box>
                  <Box w={1} >


                  </Box>
                </Flex>
              </div>
          </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({items}) => ({
  items
})

export default connect(mapStateToProps, {fetchItems})(App)
