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
    return (
      <main className="App-container">
        <article className="App-bodyCopy">
          <header className="App-pageHeader ActivityPage-pageHeader">
            <Link to='/activities'>Back</Link>
            <img src="https://placeimg.com/800/480/tech" className="ActivityPage-headerImage" />
            <h1 className="App-pageTitle">{activity.title}</h1>
            <div>{activity.neighborhood} • {activity.grade}</div>
            { activity.website && <div><a href={activity.website}>Website</a></div>}
          </header>
          <div dangerouslySetInnerHTML={this.renderDescription()} />
        </article>
      </main>
    )
  }
}

export default ActivityPage
