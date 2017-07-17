import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import BackButton from '../components/BackButton'
import activityData, { activitySlugs } from '../activityData'
import * as Util from '../util'

import './ActivityPage.css'

class ActivityPage extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount = () => {
  }

  renderDescription() {
    const activity = activityData[this.props.match.params.slug]
    return {__html: activity.description}
  }

  render() {
    const activity = activityData[this.props.match.params.slug]
    const addressString = encodeURIComponent(activity.address1 + ', ' + activity.city + ', ' + activity.state + ' ' + activity.zip)
    return (
      <main className="App-container">
        <article className="App-bodyCopy">
          <header className="App-pageHeader ActivityPage-pageHeader">
            <Link to='/' className="App-backButton">Back</Link>
            { activity.address1 && <a href={`https://www.google.com/maps/place/${addressString}`} target="_new"><img src={`https://maps.googleapis.com/maps/api/staticmap?center=${addressString}&zoom=13&size=600x300&maptype=roadmap&scale=2&markers=color:green%7C${addressString}&key=${process.env.RAZZLE_GOOGLE_MAPS_KEY}`} className="ActivityPage-mapImage" /></a> }
            <h1 className="App-pageTitle">{activity.title}</h1>
            <div className={`App-color-${Util.stringToClassName(activity.category)}`}>{activity.category}</div>
            <div>{activity.neighborhood} • {activity.grade}</div>
            { activity.website && <div><a href={activity.website} target="_new">Website</a></div>}
          </header>
          <div dangerouslySetInnerHTML={this.renderDescription()} />
        </article>
      </main>
    )
  }
}

export default ActivityPage
