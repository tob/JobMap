// src/contents/AllItems.js
import React, { PureComponent} from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import Item from './Item.js'
import {List} from 'material-ui/List';

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

          <div>
            { this.props.items.map(this.renderItem) }
          </div>
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ items }) => ({
  items
})

export default connect(mapStateToProps)(AllItems)
