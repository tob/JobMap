// src/contents/Item.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import setCenter from '../actions/map/setCenter'
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

import PhotoGrid from '../layouts/PhotoGrid'

import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
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
  this.state = {open: false, active:false, stepIndex:this.props.index, center:this.props.center};
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

  render() {

    setCenter()

    const {
      index,
      company,
      startDate,
      // endDate,
      role,
      summary,
      mapSettings,
      logo,
     } = this.props

    return(

        <Paper style={style} zDepth={3} >
          <PhotoGrid />
        </Paper>

    )
  }
}
const mapStateToProps = ({ mapSettings }) => ({
  mapSettings
})

export default connect(mapStateToProps, { setCenter })(Item)
