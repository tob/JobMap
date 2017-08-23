import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const image = 'https://d30y9cdsu7xlg0.cloudfront.net/png/7776-200.png'

const AnyReactComponent = ({ text }) => (
   <img src={image} style={{
      position: 'relative', color: 'white', width: 50,
      height: 40, width: 60, top: -20, left: -30}}/>

);



class Map extends Component {
  static defaultProps = {
    center: {lat: 53.35, lng: -6.260310},
    zoom: 11
  };

  render() {
    return (


            <GoogleMapReact
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={53.349805}
                lng={-6.260310}
                text={'Dublino INOINOINO !!!!!!'}/>
            </GoogleMapReact>

    );
  }
}

export default Map
