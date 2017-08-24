import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

function handleTouchTap() {
  alert('You clicked the Chip.');
}


const Pin = ({ text, image }) => (

    <Chip
      onClick={handleTouchTap}
      style={styles.chip}
    >
      <Avatar src={image} />
      {text}
    </Chip>

);



class Map extends Component {
  static defaultProps = {
    center: {lat: 52.35, lng: 4.897070},
    zoom: 6
  };



  render() {
    return (

            <GoogleMapReact
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >

            {this.props.locations.map((work) => (
              <Pin
                lat={work.lat}
                lng={work.lng}
                text={work.company}
                image={work.logo}/>
              )
            )
          }
            </GoogleMapReact>
    );
  }
}

export default Map
