import Languages from '../utils/Languages'

export const loader = (action) => {
  return dispatch => {
    (action) ? dispatch(activeLoader()) : dispatch(deActiveLoader())
  }
}

const activeLoader = () => {
  return {
    type: 'ACTIVATE_LOADER',
    loader: 'true'
  }
}

const deActiveLoader = () => {
  return {
    type: 'DEACTIVATE_LOADER',
    loader: false
  }
}

export const fillCharacter = data => dispatch => {
  return dispatch({ type: 'LOAD_DATA', data })
}

export const newCharacter = (id) => dispatch => {
  return dispatch({ type: 'NEW_CHARACTER', id })
}

export const showError = error => {
  return { 
    type: 'ERROR_LOAD_DATA',
    error
  }
}

export const changeLang = (value) => dispatch => {
  if (value === 'es') return dispatch({ type: 'CHANGE_LANGUAGE', language: Languages.es })
  if (value === 'en') return dispatch({ type: 'CHANGE_LANGUAGE', language: Languages.en })
}