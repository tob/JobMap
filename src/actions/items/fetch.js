
import { loading, loadError, loadSuccess } from '../loading'

export const FETCHED_ITEMS = 'FETCHED_ITEMS'

// const api = new API()

export default (items) => {
  return {
    type: FETCHED_ITEMS,
    payload: items
  }
}



// export default () => {
//   return (dispatch) => {
//     dispatch(loading(true))
//
//
//     // const backend = api.service('items')
//     // backend.find()
//     // .then((result) => {
//     //   dispatch(loadSuccess())
//     //
//     //   dispatch({
//     //     type: FETCHED_ITEMS,
//     //     payload: result.data
//     //   })
//     //
//     //   dispatch(loading(false))
//     // })
//     // .catch((error) => {
//     //   dispatch(loading(false))
//     //   dispatch(loadError(error))
//     // })
//   }
// }
