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

// function handleTouchTap() {
//   console.log('You clicked the chip');
// }


const Pin = ({ text, image }) => (

    <Chip
      style={styles.chip}
    >
      <Avatar src={image} />
      {text}
    </Chip>

);



class Map extends PureComponent {
  static defaultProps = {
    center: {lat: 52.35, lng: 4.897070},
    zoom: 6
  };

  renderItem(item, index) {
    return <Item key={index} { ...item } />
  }

  // renderPin(pin, index) {
  //
  //   if (!pin) return null
  //
  //   const center = {lat: pin.lat, lng: pin.lng}
  //   console.log(center);
  //   return <Pin
  //     key={index}
  //     lat={pin.lat}
  //     lng={pin.lng}
  //     text={pin.company}
  //     image={pin.logo}/>
  // }


  render() {
    const center = {lat: 52.35, lng: 4.897070}
    // if (!this.props.locations) return null

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
