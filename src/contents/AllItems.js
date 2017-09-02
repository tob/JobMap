// src/contents/AllItems.js
import React, { PureComponent} from 'react'
import { connect } from 'react-redux'
import Step from './CustomStep.js'
import { Stepper } from 'material-ui/Stepper';

class AllItems extends PureComponent {
  constructor(props) {
    super(props);
      this.state = {open: false, active:false, stepIndex:0, center:{lat:this.props.lat,lng:this.props.lng,}};
  }

  changeIndex(stepIndex){
    this.setState({stepIndex});
  }

  renderStep(item, index) {
    return <Step key={index} { ...item } />
  }

  render() {
    if (!this.props) return null

    const stepIndex = this.props.mapSettings.stepIndex

    return(
      <div className="items wrapper">
        <Stepper
        activeStep={stepIndex}
        linear={false}
        orientation="vertical"
        >
        { this.props.items.map(this.renderStep) }
        </Stepper>
      </div>
    )
  }
}

const mapStateToProps = ({ items, mapSettings }) => ({
  items,
  mapSettings
})

export default connect(mapStateToProps)(AllItems)
