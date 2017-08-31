export const SET_STEPINDEX = 'SET_STEPINDEX'

// const api = new API()

export default (stepIndex) => {
  return {
    type: SET_STEPINDEX,
    payload: stepIndex
  }
}
