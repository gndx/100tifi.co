import React from 'react'
import { initStore } from '../store/Store'
import { fillCharacter, newCharacter, showError } from '../actions/Actions'
import withRedux from 'next-redux-wrapper'
import Page from '../components/Page'
import Head from '../components/Head'

class Characters extends React.Component {
  static getInitialProps = async ({ store, query: { id } }) => {
    if ((id >= 1 && id <= 394)) {
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await res.json()
        store.dispatch(fillCharacter(data))
        store.dispatch(newCharacter(id))
      } catch (error) {
        store.dispatch(showError(error))
      }
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

export default withRedux(initStore, null)(Characters)