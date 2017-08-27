// src/contents/Item.js
import React, { PureComponent, PropTypes } from 'react'
import Avatar from 'material-ui/Avatar';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import Drawer from 'material-ui/Drawer';
import Chip from 'material-ui/Chip';

class Item extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    active: PropTypes.bool.isRequired,
  }


  constructor(props) {
  super(props);
  this.state = {open: false, active:false};
}

handleToggle = () => this.setState({open: !this.state.open, active:!this.state.active});

  render() {

    const {
      company,
      // startDate,
      // endDate,
      role,
      summary,
      active,
      open,
      // current,
      logo,
     } = this.props

    return(

      <Chip
        onClick={this.handleToggle}
        rightIcon={<CommunicationChatBubble />}
      >
      <Avatar src={logo} />
      {company}
      <Drawer open={this.state.open}>
      <h1>{company}</h1>
      <h2>{role}</h2>
      <p>{summary}</p>
      <Avatar src={logo} />
      </Drawer>
      </Chip>
    )
  }
}

export default Item
