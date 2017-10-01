import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import programData, { programSlugs } from '../programData'
import ProgramListing from '../components/ProgramListing'

import './Home.css'

class Home extends Component {
  render() {
    return (
      <main className="Home">
        <div className="App-container">
          <section className="Home-hero">
            <h1 className="Home-heading">Equipping students of color to become Seattle-ready innovators.</h1>
            <img className="Home-hero-image" src="/hero-image-placeholder.jpg" alt="Placeholder" />
          </section>
          <section className="Home-programs">
            <h2 className="Home-programs-title">Programs near us</h2>
            <div className="Home-programsList">
              { programSlugs.map((slug) => {
                const program = programData[slug]
                return <ProgramListing
                          program={program}
                          key={slug}
                          slug={slug}
                        />
              })}
            </div>
          </section>
          <section className="Home-aboutIdle">
            <img src="/hero-image-placeholder.jpg" className="Home-hero-image" alt="Hero" />
            <Link className="Home-hero-cta" to="/about">The IDLE Seattle Story</Link>
          </section>
        </div>
      </main>
    )
  }
}

export default Home
