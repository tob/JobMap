import React, { PureComponent} from 'react'
import {
  Step,
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



class CustomStep extends PureComponent {

componentWillMount(){
  const { items } = this.props;
  const { stepIndex } = this.props.index;
}

handleNext = () => {
  const {stepIndex} = this.state;
  console.log('Next clicked on step', stepIndex);
  if (stepIndex < this.props.items.length) {
    this.setState({stepIndex: stepIndex + 1});
  }
};

handlePrev = () => {
  const {stepIndex} = this.state;
  console.log('Back clicked on step', stepIndex);
  if (stepIndex > 0) {
    this.setState({stepIndex: stepIndex - 1});
  }
};

handleStepClick(e){
  const stepIndex = this.props.index;
  // this.changeIndex(stepIndex);
  this.setCenter();
};

changeIndex(stepIndex){
  this.setState({stepIndex});
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

  setCenter() {
      const mapSettings = this.props.center;
      const stepIndex = this.props.index;
      console.log({mapSettings, stepIndex});
      this.props.setStep(
        Object.assign({}, stepIndex));
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

    return(

    <Step>
      <div>
        <StepButton index={index} onClick={this.handleStepClick.bind(this)}>
          {startDate} - {endDate}
        </StepButton>
        <StepContent>
          <p>
            {summary}
            DIT IS A TEST
            <Item  { ...this.props } />
          </p>
        </StepContent>
      </div>
    </Step>
    )
  }
}

const mapStateToProps = ({ stepIndex, mapSettings }) => ({
  stepIndex,
  mapSettings
})

export default connect(mapStateToProps, { setCenter, setStep })(CustomStep)
