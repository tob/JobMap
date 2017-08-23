// src/components/Title.js
import React, { PureComponent } from 'react'

class Title extends PureComponent {
  render() {
    return (
      <h1>{ this.props.content }</h1>
    )
  }
}

export default Title
