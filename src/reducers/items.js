import {FETCHED_ITEMS} from '../actions/items/fetch'

const items = [

  {
    index: 0,
    company: 'Lionbridge',
    startDate:'july 2011',
    endDate:'july 2012',
    role:'Project Manager',
    summary: 'working out a lot',
    active: false,
    open: false,
    current: true,
    center: { lat: 53.350140,
        lng: -6.266155,},
    lat: 53.350140,
    lng: -6.266155,
    logo: 'https://interpretation.lionbridge.com/Img/lionbridge%20logo.png',
  },
  {
    index: 1,
    company: 'eFaqt',
    startDate:'july 2011',
    endDate:'july 2012',
    role:'Project Manager',
    summary: 'working out a lot',
    active: false,
    open: false,
    current: true,
    center: {    lat: 52.377956,
        lng: 4.897070,},
    lat: 52.377956,
    lng: 4.897070,
    logo: 'https://pbs.twimg.com/profile_images/378800000566044758/2e1abbee62059eef9683f0f73135013e_400x400.png',
  },
  {
    index: 2,
    company: 'Technogym',
    startDate:'july 2011',
    endDate:'july 2012',
    role:'Project Manager',
    summary: 'working out a lot',
    active: false,
    open: false,
    current: true,
    center: {lat: 45.464211,
        lng: 9.191383,},
    lat: 45.464211,
    lng: 9.191383,
    logo: 'http://www.sunserimobili.it/wp-content/uploads/2015/05/logo-technogym-X-ARTICOLO.jpg',
  },]



export default (state = items, { type, payload } = {}) => {
  switch (type) {
    case FETCHED_ITEMS :
      return items

    default:
      return state
  }
}
