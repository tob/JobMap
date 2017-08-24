// src/contents/AllItems.js
import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import Item from './Item.js'
import {List, ListItem} from 'material-ui/List';

class AllItems extends PureComponent {
  renderItem(item, index) {
    return <Item key={index} { ...item } />
  }

  render() {
    return(
      <div className="items wrapper">
        <main>
        <header>
          <Title content="Professional experiences" />
        </header>


          <List>
            { this.props.items.map(this.renderItem) }
          </List>
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ items }) => ({
  items
})

export default connect(mapStateToProps)(AllItems)
