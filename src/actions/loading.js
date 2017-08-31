export const APP_LOADING = 'APP_LOADING'
export const APP_DONE_LOADING = 'APP_DONE_LOADING'
export const LOAD_ERROR = 'LOAD_ERROR'
export const LOAD_SUCCESS = 'LOAD_SUCCESS'
export const AUTH_ERROR = 'AUTH_ERROR'

export const loading = (loading) => ({
  type: loading ? APP_LOADING : APP_DONE_LOADING ,
  payload: loading ? 'Taking my time to load' : 'Loading Done'
})

export const loadError = (error) => ({
  type: LOAD_ERROR,
  payload: error
})

export const loadSuccess = () => ({
  type: LOAD_SUCCESS,
  payload: 'Yuppidoo, the action is doing something'
})

export const authError = () => ({
  type: AUTH_ERROR,
  payload: 'If you see this you are doing something seriously wrong with AUTH, I have not implemented yet'
})
