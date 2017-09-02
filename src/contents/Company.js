// src/contents/Item.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import setCenter from '../actions/map/setCenter'
import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';
import Chip from 'material-ui/Chip';

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
      company,
      // startDate,
      // endDate,
      role,
      summary,
      logo,
     } = this.props

    return(

      <Chip
        onTouchTap={this.handleToggle.bind(this)}>

        <Avatar src={logo} />
        {company}
        <Drawer openSecondary={true} open={this.state.open}>
          <h1>{company}</h1>
          <h2>{role}</h2>
          <p>{summary}</p>
          <Avatar src={logo} />
        </Drawer>
      </Chip>
    )
  }
}
const mapStateToProps = ({ mapSettings }) => ({
  mapSettings
})

export default connect(mapStateToProps, { setCenter })(Item)
