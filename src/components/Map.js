import React, { PureComponent, PropTypes } from 'react'
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux'
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import Item from '../contents/Item.js'

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};


class Map extends PureComponent {
  static defaultProps = {
    center: {lat: 52.35, lng: 4.897070},
    zoom: 6
  };

  renderItem(item, index) {
    return <Item key={index} { ...item } />
    
  }



  render() {
    const center = {lat: 52.35, lng: 4.897070}

    return (

            <GoogleMapReact
              defaultCenter={center}
              defaultZoom={this.props.zoom}
            >
            {this.props.items.map(this.renderItem)}
            </GoogleMapReact>
    )
  }
}
const mapStateToProps = ({ items }) => ({
  items
})

export default connect(mapStateToProps)(Map)
