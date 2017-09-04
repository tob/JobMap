// src/contents/Item.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import setCenter from '../actions/map/setCenter'
import PhotoGrid from '../layouts/PhotoGrid'
import Paper from 'material-ui/Paper';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const style = {
  width: 200,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class Item extends PureComponent {

  constructor(props) {
  super(props);
  this.state = {open: false, active:false, stepIndex:this.props.mapSettings.stepIndex, center:this.props.center};
}

handleToggle(e){
  this.setState(
    {
      open: !this.state.open,
      active:!this.state.active,
      stepIndex:this.props.index,
      center:this.props.center,
    }
  );
  this.setCenter()
}

setCenter(stepIndex) {
  const mapSettings = {center:this.props.center, zoom:this.props.zoom, stepIndex:stepIndex}
    this.props.setCenter(
      Object.assign({}, mapSettings));
  }

  isActive(){
    const stepIndex = this.props.mapSettings.stepIndex
    if (stepIndex === this.props.step) return (
      <PhotoGrid />)
     else return (
      <h2>Nothing to see</h2>
    )
  }

  render() {

    setCenter()

    const {
      step,
      company,
      startDate,
     } = this.props

    return(

        <Paper style={style} zDepth={3} onClick={this.setCenter.bind(this, step)}>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          transitionAppear={true}
          transitionAppearTimeout={2000}>
        {this.isActive()}
        </ReactCSSTransitionGroup>
        {company} - {startDate}
        </Paper>

    )
  }
}
const mapStateToProps = ({ mapSettings }) => ({
  mapSettings
})

export default connect(mapStateToProps, { setCenter })(Item)
