import React, { Component } from 'react'

export default class Error extends Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }
  render() {
    const styles = {
      background:'url(https://s3.amazonaws.com/chewiekie/img/error-404-tifico.jpg)',
      backgroundSize:'cover',
      height:'800px',
      color:'#ffffff',
      fontSize: '18px'
    };
    return (
      <div style={styles}>
        {this.props.statusCode
          ? <p>An error {this.props.statusCode} occurred on server 😭</p>
          : <p>An error occurred on client 😭</p>
        }
      </div>
    )
  }
}