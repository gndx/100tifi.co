import React from 'react'
import { connect } from 'react-redux'
import Card from '../components/Card'
import Loader from '../components/Loader'
import '../styles/style.css'

const Home = ({ loader }) => {
  return(
    <div>
      {loader && <Loader />}
      <Card />
    </div>
  )
}

const mapStateToProps = ({ loader }) => ({ loader })
export default connect(mapStateToProps)(Home)
