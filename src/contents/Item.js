// src/contents/Item.js
import React, { PureComponent } from 'react'
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

class Item extends PureComponent {
  render() {
    const {
      company,
      startDate,
      endDate,
      role,
      summary,
      active,
      open,
      current,
      logo,
     } = this.props

    return(

      <ListItem
        primaryText={company}
        secondaryText={role}
        leftAvatar={<Avatar src={logo} />}
        rightIcon={<CommunicationChatBubble />}
      />

    )
  }
}

export default Item
