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
      index,
      company,
      // startDate,
      // endDate,
      role,
      summary,
      center = this.props.mapSettings.center,
      // active,
      // open,
      // current,
      logo,
      GoogleMapConfig = {
        key:'AIzaSyCdPX0f-j9GMIC4N-0SnnOLT48_3ltY1_g',
      },
     } = this.props

     const zoom = this.props.mapSettings.zoom


     
    return (
            <GoogleMap
              bootstrapURLKeys={GoogleMapConfig}
              center={center}
              zoom={zoom}
            >
            {this.props.items.map(this.renderItem)}
            </GoogleMap>
    )
  }
}
const mapStateToProps = ({ items, mapSettings }) => ({
  items,
  mapSettings
})

export default connect(mapStateToProps)(Map)
