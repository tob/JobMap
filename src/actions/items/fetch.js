
import { loading, loadSuccess } from '../loading'

export const FETCHED_ITEMS = 'FETCHED_ITEMS'

// const api = new API()

export default (items) => {
  return (dispatch) => {
    dispatch(loading(true))

    dispatch(loadSuccess())

    dispatch({
      type: FETCHED_ITEMS,
      payload: [items],
    })

      dispatch(loading(false))
  }
}
