import React, { PureComponent } from 'react'
import GoogleMap from 'google-map-react';
import { connect } from 'react-redux'
import Item from '../contents/Company.js'



class Map extends PureComponent {

  renderItem(item, index) {
    return <Item key={index} { ...item } />
  }

  render() {
    if (!this.props) return null
    const {
      // company,
      // startDate,
      // endDate,
      // role,
      // summary,
      center = this.props.mapSettings.center,
      // active,
      // open,
      // current,
      // logo,
      GoogleMapConfig = {
        key:'AIzaSyCdPX0f-j9GMIC4N-0SnnOLT48_3ltY1_g',
        styles: [{"stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"visibility":"on"},{"hue":"#ffffff"},{"saturation":-100},{"lightness":100}]},{"featureType":"water","stylers":[{"visibility":"on"},{"lightness":-35},{"saturation":-100}]},{"featureType":"administrative.province","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":90}]}]
      },
     } = this.props

     const zoom = this.props.mapSettings.zoom



    return (
            <GoogleMap
              bootstrapURLKeys={GoogleMapConfig}
              center={center}
              styles={GoogleMapConfig.styles}
              zoom={zoom}
            >
            {this.props.items.map(this.renderItem)}
            </GoogleMap>
    )
  }
}
const mapStateToProps = ({ activeItems, mapSettings }) => ({
  activeItems,
  mapSettings
})

export default connect(mapStateToProps)(Map)
