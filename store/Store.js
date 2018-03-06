import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import fetch from 'isomorphic-unfetch'
import Languages from '../utils/Languages'

const exampleInitialState = {
  loader: true, 
  language: Languages.en,
  data: null, 
  alert: null,
  character: null
}

export const reducer = (state = exampleInitialState, action) => {
  const { type } = action;
  const { language, data, loader, error, id } = action;
  switch (type) {
    case 'LOAD_DATA':
      return { ...state, data }
    case 'DEACTIVATE_LOADER':
    case 'ACTIVATE_LOADER':
      return { ...state, loader }
    case 'ERROR_LOAD_DATA':
      return { ...state, alert: error }
    case 'CHANGE_LANGUAGE':
      return { ...state, language }
    case 'NEW_CHARACTER':
      return { ...state, character: id }
    default:
      return state;
  }
}

export const initStore = (initialState = exampleInitialState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
