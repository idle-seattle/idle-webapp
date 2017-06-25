import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import BackButton from '../components/BackButton'
import activityData, { activitySlugs } from '../activityData'

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
            <Link to='/activities' className="App-backButton">Back</Link>
            <img src="https://placeimg.com/800/480/tech" className="ActivityPage-headerImage" />
            <h1 className="App-pageTitle">{activity.title}</h1>
            <div>{activity.neighborhood} • {activity.grade}</div>
            { activity.website && <div><a href={activity.website}>Website</a></div>}
          </header>
          <div dangerouslySetInnerHTML={this.renderDescription()} />
          { activity.address1 && <a href={`https://www.google.com/maps/place/?q=${addressString}`}><img src={`https://maps.googleapis.com/maps/api/staticmap?center=${addressString}&zoom=13&size=600x300&maptype=roadmap&scale=2&markers=color:green%7C${addressString}&key=${process.env.RAZZLE_GOOGLE_MAPS_KEY}`} className="ActivityPage-mapImage" /></a> }
        </article>
      </main>
    )
  }
}

export default ActivityPage
