export const SET_CENTER = 'SET_CENTER'

// const api = new API()

export default (center) => {
  return {
    type: SET_CENTER,
    payload: center
  }
}
