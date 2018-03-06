import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loader } from '../actions/Actions'
import '../styles/style.css'
import Footer from './Footer'

class Card extends Component {
  state = {
    data: null
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.props.loader()
    }, 2000)
  }

  render() {
    const { data, character, language } = this.props
    return (
      <main>
        <section>
          <h1>{data.name}</h1>
        </section>
        <section>
          <h2><small>{language.species}</small>{data.species}</h2>
        </section>
        <section>
          <h2><small>{language.gender}</small>{data.gender}</h2>
        </section>
        <section>
          <h2><small>{language.episodes}</small>{data.episode.length}</h2>
        </section>
        <section className="heading">
          <img src={data.image} alt={data.name} />
          <p>{language.share}</p>
        </section>
        <section className="intro">
          <h2><small>{language.origin}</small>{data.origin.name}</h2>
          <h2><small>{language.location}</small>{data.location.name}</h2>
          {this.props.data.status === 'Dead' && <p>{language.status.dead}</p>}
          {this.props.data.status === 'Alive' && <p>{language.status.alive}</p>}
          {this.props.data.status === 'unknown' && <p>{language.status.unknown}</p>}
        </section>
        <section className='social'>
          <h3>Facebook</h3>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=https://100tifi.co/character/${data.id}`} target='_blank'>
            <i className="fab fa-facebook"></i>
          </a>  
        </section>
        <section className='social'>
          <h3>Twitter</h3>
          <a href={`https://twitter.com/share?url=https://100tifi.co/character/${data.id}`} target='_blank'>
            <i className="fab fa-whatsapp-square"></i>
          </a>        
        </section>
        <section className='social'>
          <h3>Whatsapp</h3>
          <a href={`https://api.whatsapp.com/send?phone=whatsappphonenumber&text=https://100tifi.co/character/${data.id}`} target='_blank'>
            <i className="fab fa-whatsapp-square"></i>
          </a>
        </section>
        <section className='reload'>
          {character ? <h4><a href="/" className='blink'>{language.home.character}</a></h4> : <h3>{language.home.welcome}</h3>}
        </section>
        <Footer />
      </main>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loader: () => {
      dispatch(loader(false))
    }
  }
}

const mapStateToProps = ({ data, language, character }) => ({ data, language, character })
export default connect(mapStateToProps, mapDispatchToProps)(Card)