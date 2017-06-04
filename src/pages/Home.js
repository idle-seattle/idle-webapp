import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

class Home extends Component {
  render() {
    return (
      <main className="Home">
        <div className="App-container">
          <div className="Home-hero">
            <h1 className="Home-heading">Equipping students of color to become Seattle-ready innovators.</h1>
            <Link className="Home-hero-cta" to="/about">About IDLE Seattle</Link>
            <img className="Home-hero-image" src="/hero-image-placeholder.jpg" alt="Placeholder image" />
          </div>
          <div>
            <Link to="/activities">See all activities</Link>
          </div>
        </div>
      </main>
    )
  }
}

export default Home
