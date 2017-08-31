import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from './components/Title'
import Map from './components/Map'
import AllItems from './contents/AllItems'
import {Flex, Box } from 'reflexbox'
import fetchItems from './actions/items/fetch'
import fetchMap from './actions/map/fetch'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/theme'
import DatePicker from 'material-ui/DatePicker';
import './App.css'

class App extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    mapSettings: PropTypes.object.isRequired,
    fetchItems: PropTypes.func.isRequired,
    fetchMap: PropTypes.func.isRequired,
  }


  static childContextTypes = {
   muiTheme: PropTypes.object.isRequired,
 }

 componentWillMount() {
  this.props.fetchItems();
  this.props.fetchMap();
}


 getChildContext() {
   return { muiTheme }
 }


  render() {

    if (!this.props) return null
    const {items} = this.props
    console.log({items});

    return (
            <MuiThemeProvider muiTheme={muiTheme}>
              <div className="App">

                <Title content="Tobia Donati" />
                <Flex
                  wrap
                  w={1}
                  style={{ height: '100%' }}
                  justify='left' >
                  <Box w={1/4} style={{ height: '500px' }} >
                  <DatePicker
                    hintText="Open to Year"
                    openToYearSelection={true}
                    disabled={false}
                    container='inline' />
                  <AllItems items={items}/>
                  </Box>
                  <Box w={3/4} >
                    <Map items={items}
                    zoom={items[0].zoom}/>
                  </Box>
                  <Box w={1} >
                  </Box>
                </Flex>
              </div>
          </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({items, mapSettings}) => ({
  items,
  mapSettings
})

export default connect(mapStateToProps, {fetchItems, fetchMap})(App)
