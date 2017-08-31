
import { loading, loadError, loadSuccess } from '../loading'

export const FETCHED_MAP = 'FETCHED_MAP'

// const api = new API()

export default (mapSettings) => {

  return (dispatch) => {
    dispatch(loading(true))

    dispatch(loadSuccess())

    dispatch({
      type: FETCHED_MAP,
      payload: {mapSettings},
    })

      dispatch(loading(false))
  }
}
