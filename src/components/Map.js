import React, { PureComponent } from 'react'
import GoogleMap from 'google-map-react';
import { connect } from 'react-redux'
import Item from '../contents/Item.js'
import mapStyles from './mapStyles'




class Map extends PureComponent {

  renderItem(item, index) {
    return <Item key={index} step={index} { ...item } />
  }

  render() {
    if (!this.props) return null
    const {
      center = this.props.mapSettings.center,
      // active,
      // open,
      // current,
      // logo,
      GoogleMapConfig = {
        key:'AIzaSyCdPX0f-j9GMIC4N-0SnnOLT48_3ltY1_g',

      },
      options = {
        styles: mapStyles,
        scrollwheel: false,
        zoom: this.props.mapSettings.zoom

     },
     } = this.props
     console.log({mapStyles})
     const zoom = this.props.mapSettings.zoom



    return (
            <GoogleMap
              bootstrapURLKeys={GoogleMapConfig}
              center={center}
              options={options}
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
