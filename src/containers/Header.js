import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="App-container">
          <Link to="/" className="Header-logo"><img src="/idle-logo.svg" alt="Idle Seattle" /></Link>
        </div>
      </header>
    )
  }
}

export default Header
