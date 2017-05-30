import React, { Component } from 'react'
import Header from '../containers/Header'
import './Layout.css'

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <Header />
        { this.props.children }
      </div>
    );
  }
}

export default Layout;
