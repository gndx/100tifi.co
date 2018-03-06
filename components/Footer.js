import React, {Component} from 'react'
import { connect } from 'react-redux'
import { changeLang } from '../actions/Actions'
import '../styles/style.css'

class Footer extends Component {
  spanish = () => this.props.changeLang('es')
  english = () => this.props.changeLang('en')
  render() {
    return (
      <section className='idioms'>    
        <ul>
          <li><a onClick={this.spanish}><img src="https://s3.amazonaws.com/chewiekie/img/100tifico-spanish.png" alt="spanish" /></a></li>
          <li><a onClick={this.english}><img src="https://s3.amazonaws.com/chewiekie/img/100tifico-english.png" alt="english" /></a></li>
        </ul>
      </section>
    )
  }
}
const mapStateToProps = ({ data, language }) => ({ data, language })
const mapDispatchToProps = dispatch => {
  return {
    changeLang: (value) => {
      dispatch(changeLang(value))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer)
