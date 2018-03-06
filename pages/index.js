import React from 'react'
import { initStore } from '../store/Store'
import { fillCharacter, showError } from '../actions/Actions'
import withRedux from 'next-redux-wrapper'
import Page from '../components/Page'
import Head from '../components/Head'
import { ramdomCharacter } from '../utils/Utils'

class app extends React.Component {
  static getInitialProps = async ({ store }) => {
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${ramdomCharacter()}`)
      const data = await res.json()
      store.dispatch(fillCharacter(data))
    } catch (error) {
      store.dispatch(showError(error))
    }
  }
  render() {
    return (
      <div>
        <Head />
        <Page />
      </div>
    )
  }
}

export default withRedux(initStore, null)(app)