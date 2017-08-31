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



class CustomStep extends PureComponent {

componentWillMount(){
  // const { items } = this.props;
  const { stepIndex } = this.props.stepIndex;
  console.log(stepIndex)
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
  const stepIndex = e.target.index;
  this.props.changeIndex(stepIndex);
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



  render() {

    const {
      index,
      company,
      startDate,
      // endDate,
      // role,
      summary,
      // active,
      // open,
      // current,
      logo,
      // changeIndex,
     } = this.props

    return(
      this.props.changeIndex(),

    <Step>
      <div>
        <StepLabel
          icon={<Avatar src={logo} />} >
          {startDate}
        </StepLabel>
        <StepButton index={index} onClick={this.handleStepClick.bind(this)}>
          {company}
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


export default CustomStep
