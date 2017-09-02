// src/components/Header.js
import React, { PureComponent } from 'react'
import {Flex, Box } from 'reflexbox'

class Header extends PureComponent {
  render() {
    return (
      <Flex
        wrap
        w={1}
        justify='center' >
        <Box w={1/4} >
          <h1>ToBio</h1>
        </Box>
        <Box w={1/2} >

        </Box>
        <Box w={1/4} >
          <a>Download</a>
        </Box>

      </Flex>
    )
  }
}

export default Header
