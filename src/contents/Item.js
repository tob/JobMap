// src/contents/Item.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import setCenter from '../actions/map/setCenter'
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class Item extends PureComponent {

  constructor(props) {
  super(props);
  this.state = {open: true, active:false, stepIndex:this.props.index, center:this.props.center};
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
        <div>
        <Chip
          onTouchTap={this.handleToggle.bind(this)}>

          {startDate}
        </Chip>
          <RaisedButton
            onClick={this.handleTouchTap}
            label="Click me"
          />
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.handleRequestClose}
          >
            <Menu>
              <MenuItem primaryText="Refresh" />
              <MenuItem primaryText="Help &amp; feedback" />
              <MenuItem primaryText="Settings" />
              <MenuItem primaryText="Sign out" />
            </Menu>
          </Popover>
        </div>

    )
  }
}
const mapStateToProps = ({ mapSettings }) => ({
  mapSettings
})

export default connect(mapStateToProps, { setCenter })(Item)
