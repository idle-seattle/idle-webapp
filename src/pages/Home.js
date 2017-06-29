import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import activityData, { activitySlugs } from '../activityData'
import ActivityListing from '../components/ActivityListing'

import './Home.css'

class Home extends Component {
  render() {
    return (
      <main className="Home">
        <div className="App-container">
          <section className="Home-hero">
            <h1 className="Home-heading">Equipping students of color to become Seattle-ready innovators.</h1>
            <img className="Home-hero-image" src="/hero-image-placeholder.jpg" alt="Placeholder image" />
          </section>
          <section className="Home-programs">
            <h2 className="Home-programs-title">Programs near us</h2>
            <div className="Home-programsList">
              { activitySlugs.map((slug) => {
                const activity = activityData[slug]
                return <ActivityListing
                          activity={activity}
                          key={slug}
                          slug={slug}
                        />
              })}
            </div>
          </section>
          <section className="Home-aboutIdle">
            <img src="/hero-image-placeholder.jpg" className="Home-hero-image" />
            <Link className="Home-hero-cta" to="/about">The IDLE Seattle Story</Link>
          </section>
        </div>
      </main>
    )
  }
}

export default Home
