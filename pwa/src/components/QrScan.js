import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import { Redirect } from 'react-router-dom';

class QrScan extends Component {
  state = {
    result: 'No result',
    link: false
  }
 
  handleScan = data => {
    if (data) {
      this.setState({
        result: data,
        link: true
      })
    }
  }
  handleError = err => {
    console.error(err)
  }

  render() {
      if (this.state.link) {
          return <Redirect to={`/vehicule/${this.state.result}`}/>
      }
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%', position: 'absolute', top:'0', marginTop:'20vh'}}
          />
          {this.state.link ? (
              <a href={`/vehicule/${this.state.result}`}>Rent this vehicule</a>
              ) : (
                  <p>Waiting for scan</p>
              )}
      </div>
    )
  }
}

export default QrScan;