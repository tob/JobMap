import {FETCHED_MAP} from '../actions/map/fetch'
import {SET_CENTER} from '../actions/map/setCenter'

const mapSettings =  {
  center: {
      lat: 45.464211,
      lng: 9.191383,},
  zoom: 1,
  }




export default (state = mapSettings, { type, payload } = {}) => {
  switch (type) {
    case SET_CENTER :
      return Object.assign({}, payload)

    case FETCHED_MAP :
        return mapSettings

    default:
      return state
  }
}
