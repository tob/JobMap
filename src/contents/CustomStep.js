import React, { PureComponent} from 'react'
import {
  Step,
  StepLabel,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Item from './Item.js'
import setCenter from '../actions/map/setCenter'
import setStep from '../actions/items/setStep'
import { connect } from 'react-redux'
import WarningIcon from 'material-ui/svg-icons/alert/warning';



class CustomStep extends PureComponent {



handleNext = () => {
  const stepIndex = this.props.index + 1;
  console.log('Next clicked on step', {stepIndex});
  if (stepIndex <= 3) {
    this.setCenter(stepIndex);
  } else {
    const stepIndex = 0
    this.setCenter(stepIndex);
  }
  console.log('Aftermath', {stepIndex});
};

handlePrev = () => {
  const {stepIndex} = this.props.index - 1;
  console.log('Back clicked on step', stepIndex);
  if (stepIndex > 0) {
    this.setState({stepIndex: stepIndex});
  }
};

  playStory(stepIndex) {
    setInterval(() => {
      const counter = stepIndex + 1;
      console.log(counter)
      if (stepIndex <= 3) {
        this.setCenter(counter);
      } else {
        const stepIndex = 0
        this.setCenter(counter);
      }
    }, 2000)
  }

handleStepClick(e){
  const stepIndex = this.props.index;
  // this.changeIndex(stepIndex);
  this.setCenter(stepIndex);
  // this.playStory()
};

autoIndex() {
  setInterval(() => {
  this.handleNext()
  }, 2000)
}


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

  setCenter(stepIndex) {
    const mapSettings = {center:this.props.center, zoom:this.props.zoom, stepIndex:stepIndex}
      this.props.setCenter(
        Object.assign({}, mapSettings));
    }


  render() {

    const {
      index,
      company,
      startDate,
      endDate,
      // role,
      summary,
      // active,
      // open,
      // current,
      mapSettings,
      logo,
      // changeIndex,
     } = this.props

     const stepIndex = this.props.mapSettings.stepIndex
     const counter = 0

    return(

    <Step active={stepIndex === this.props.index}>
        <StepLabel onClick={this.handleStepClick.bind(this)} icon={<Avatar src={logo} />}>
          {startDate} - {endDate}
        </StepLabel>
        <StepContent>
          <p>
            {summary}
            {this.renderStepActions({index})}
          </p>
        </StepContent>

    </Step>
    )
  }
}

const mapStateToProps = ({ stepIndex, mapSettings }) => ({
  stepIndex,
  mapSettings
})

export default connect(mapStateToProps, { setCenter, setStep })(CustomStep)
