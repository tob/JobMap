// src/contents/Item.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import setCenter from '../actions/map/setCenter'
import PhotoGrid from '../layouts/PhotoGrid'
import Paper from 'material-ui/Paper';

const style = {
  width: 400,
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
  console.log(this.state);
  console.log(this.props);
  this.setCenter()
}

setCenter() {
    const mapSettings = this.props.center
    console.log({mapSettings});
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
      company,
     } = this.props

    return(

        <Paper style={style} zDepth={3} >
        {this.isActive()}
        {company}
        </Paper>

    )
  }
}
const mapStateToProps = ({ mapSettings }) => ({
  mapSettings
})

export default connect(mapStateToProps, { setCenter })(Item)
