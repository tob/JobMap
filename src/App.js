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
import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import './App.css'



class App extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    fetchItems: PropTypes.func.isRequired,
  }

  state = {
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStepActions(step) {
  return (
    <div style={{margin: '12px 0'}}>
      <RaisedButton
        label="Next"
        disableTouchRipple={true}
        disableFocusRipple={true}
        primary={true}
        onClick={this.handleNext}
        style={{marginRight: 12}}
      />
      {step > 0 && (
        <FlatButton
          label="Back"
          disableTouchRipple={true}
          disableFocusRipple={true}
          onClick={this.handlePrev}
        />
      )}
    </div>
  );
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
    const {stepIndex} = this.state;

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
                    <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
        <Stepper
          activeStep={stepIndex}
          linear={false}
          orientation="vertical"
        >
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>
              Select campaign settings
            </StepButton>
            <StepContent>
              <p>
                For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.
              </p>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
              Create an ad group
            </StepButton>
            <StepContent>
              <p>An ad group contains one or more ads which target a shared set of keywords.</p>
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 2})}>
              Create an ad
            </StepButton>
            <StepContent>
              <p>
                Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.
              </p>
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>
      </div>

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
