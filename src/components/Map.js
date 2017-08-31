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
      center = this.props.mapSettings,
      // active,
      // open,
      // current,
      logo,
      zoom = 5,
      GoogleMapConfig = {
        key:'AIzaSyCdPX0f-j9GMIC4N-0SnnOLT48_3ltY1_g',
      },
     } = this.props

     console.log(this.props.center);

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
