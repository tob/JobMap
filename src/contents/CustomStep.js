import React, { PureComponent} from 'react'
import {
  Step,
  StepLabel,

  StepContent,
} from 'material-ui/Stepper';

import Avatar from 'material-ui/Avatar';
import setCenter from '../actions/map/setCenter'
import setStep from '../actions/items/setStep'
import { connect } from 'react-redux'

// import Forward from 'material-ui/svg-icons/Content/Forward'
import IconButton from 'material-ui/IconButton';
import ArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import ArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';



class CustomStep extends PureComponent {

handleNext = () => {
  const stepIndex = this.props.index + 1
  if (stepIndex <= this.props.items.length -1) {
    this.setCenter(stepIndex);
  } else {
    this.setCenter(0);
  }
};

handlePrev = () => {
  const stepIndex = this.props.index - 1;
  console.log('Back clicked on step', stepIndex);
  if (stepIndex >= 0) {
    this.setCenter(stepIndex);
  } else {
    const stepIndex = this.props.items.length -1
    this.setCenter(stepIndex)
  }
};

  playStory(stepIndex) {
    setInterval(() => {
      const counter = stepIndex + 1;
      console.log(counter)
      if (stepIndex <= this.props.items.length) {
        this.setCenter(counter);
      } else {
        const stepIndex = 0
        this.setCenter(stepIndex);
      }
    }, 2000)
  }

handleStepClick(e){
  const stepIndex = this.props.index;
  this.setCenter(stepIndex);
};

// autoIndex() {
//   setInterval(() => {
//   this.handleNext()
//   }, 2000)
// }


  renderStepActions(step) {
    return (
      <div>
        <IconButton
          onClick={this.handleNext}
        >
          <ArrowDown />
        </IconButton>
        <IconButton
          onClick={this.handlePrev}
        >
          <ArrowUp />
        </IconButton>
      </div>
    );
  }

  setCenter(stepIndex) {
    const mapSettings = {center:this.props.items[stepIndex].center, zoom:this.props.items[stepIndex].zoom, stepIndex:stepIndex}
      this.props.setCenter(
        Object.assign({}, mapSettings));
    }


  render() {

    const {
      startDate,
      endDate,
      summary,
      logo,
     } = this.props

     const stepIndex = this.props.mapSettings.stepIndex

    return(

    <Step active={stepIndex === this.props.index}>
        <StepLabel onClick={this.handleStepClick.bind(this)} icon={<Avatar src={logo} />}>
          {startDate} - {endDate}
        </StepLabel>
        <StepContent>

            {summary}
            {this.renderStepActions({stepIndex})}

        </StepContent>

    </Step>
    )
  }
}

const mapStateToProps = ({ stepIndex, mapSettings, items }) => ({
  stepIndex,
  mapSettings,
  items
})

export default connect(mapStateToProps, { setCenter, setStep })(CustomStep)
