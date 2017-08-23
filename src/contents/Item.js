// src/contents/Item.js
import React, { PureComponent } from 'react'

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
     } = this.props

    return(
      <article className="item">
        <h2>{ company }</h2>
        <div>
          <p>{ summary }</p>
          <p>{ startDate }</p>
          <p>{ endDate }</p>
          <p>{ role }</p>
          <ul>
            { active && <li><span role="img" aria-label="Active">🌾</span></li> }
            { !open && active && <li><span role="img" aria-label="closed">🥕</span></li> }
            { current && <li><span role="img" aria-label="current">🐟</span></li> }
          </ul>
        </div>
      </article>
    )
  }
}

export default Item
