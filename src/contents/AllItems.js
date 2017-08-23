// src/contents/AllItems.js
import React, { PureComponent } from 'react'
import Title from '../components/Title'
import Item from './Item.js'

class AllItems extends PureComponent {
  renderItem(item, index) {
    return <Item key={index} { ...item } />
  }

  render() {
    return(
      <div className="items wrapper">
        <header>
          <Title content="Professional experiences" />
        </header>

        <main>
          { this.props.items.map(this.renderItem) }
        </main>
      </div>
    )
  }
}

export default AllItems
