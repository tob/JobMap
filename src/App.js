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
    const stepIndex = this.props.mapSettings.stepIndex

    const activeItems = items.filter((item, index) => {
      return index <= stepIndex
    })


    return (
            <MuiThemeProvider muiTheme={muiTheme}>
              <div className="App">

                <Title content="Tobia Donati" />
                <Flex
                  wrap
                  w={1}
                  style={{ height: '100vh' }}
                  justify='left' >
                  <Box w={1/5} style={{ height: '100vh'}} overflowY="scroll">
                  <AllItems items={items}/>
                  </Box>
                  <Box w={4/5}>
                    <Map items={activeItems} zoom={4}/>
                  </Box>
                  <Box w={1/3}>
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
