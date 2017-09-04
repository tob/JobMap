import {FETCHED_ITEMS} from '../actions/items/fetch'
import {SET_STEPINDEX} from '../actions/items/setStep'

var images = [
  {
    img: 'http://lorempixel.com/800/600/animals/',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'http://lorempixel.com/800/600/sports/',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'http://lorempixel.com/800/600/food/',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'http://lorempixel.com/800/600/cats/',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'http://lorempixel.com/800/600/animals/',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'http://lorempixel.com/800/600/animals/',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'http://lorempixel.com/800/600/animals/',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'http://lorempixel.com/800/600/animals/',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

const items = [
  {
    // index: 0,
    company: 'Casa.it',
    startDate:'oct 2009',
    endDate:'dec 2010',
    role:'Content Manager',
    summary: 'working out a lot',
    active: false,
    open: false,
    current: true,
    images: images,
    zoom: 6,
    center: {lat: 45.464211,
        lng: 9.191383,},
    lat: 45.464211,
    lng: 9.191383,
    logo: 'https://lh3.googleusercontent.com/4sDWaDb_cL7iwYf5YbZngSWLgy7POTNHQvOweUoYchDO0c_vJLIRYDADRbmze_L7TCw=w300',
  },
  {
    // index: 0,
    company: 'Technogym',
    startDate:'jan 2011',
    endDate:'mar 2012',
    role:'Project Manager',
    summary: 'working out a lot',
    active: false,
    open: false,
    current: true,
    images: images,
    zoom: 6,
    center: {lat: 44.1396,
        lng: 12.2464,},
    lat: 44.1396,
    lng: 12.2464,
    logo: 'http://www.sunserimobili.it/wp-content/uploads/2015/05/logo-technogym-X-ARTICOLO.jpg',
  },
  {
    // index: 1,
    company: 'Lionbridge',
    startDate:'jun 2012',
    endDate:'jun 2013',
    role:'Project Manager',
    summary: 'working out a lot',
    active: false,
    open: false,
    current: true,
    images: images,
    zoom: 6,
    center: { lat: 53.350140,
        lng: -6.266155,},
    lat: 53.350140,
    lng: -6.266155,
    logo: 'https://interpretation.lionbridge.com/Img/lionbridge%20logo.png',
  },
  {
    // index: 2,
    company: 'Moravia',
    startDate:'jul 2013',
    endDate:'sep 2015',
    role:'UAT - Support.microsoft.com',
    summary: 'working out a lot',
    active: false,
    open: false,
    current: true,
    images: images,
    zoom: 6,
    center: { lat: 49.195060,
        lng: 16.606837,},
    lat: 49.195060,
    lng: 16.606837,
    logo: 'https://media.glassdoor.com/sqll/29853/moravia-worldwide-squarelogo.png',
  },
  {
    // index: 3,
    company: 'eFaqt',
    startDate:'jan 2016',
    endDate:'jun 2017',
    role:'Project Manager',
    summary: 'working out a lot',
    active: false,
    open: false,
    current: true,
    images: images,
    zoom:6,
    center: {    lat: 52.377956,
        lng: 4.897070,},
    lat: 52.377956,
    lng: 4.897070,
    logo: 'https://pbs.twimg.com/profile_images/378800000566044758/2e1abbee62059eef9683f0f73135013e_400x400.png',
  },]





export default (state = items, { type, payload } = {}) => {
  switch (type) {
    case FETCHED_ITEMS :
      return items

    case SET_STEPINDEX :
      return Object.assign({...items}, payload)

    default:
      return state
  }
}
