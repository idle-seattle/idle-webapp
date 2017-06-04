import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import activityData, { activitySlugs } from '../activityData'

class ActivityPage extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount = () => {
    console.log(this.props.match.params)
  }

  renderDescription() {
    const activity = activityData[this.props.match.params.slug]
    return {__html: activity.description}
  }

  render() {
    const activity = activityData[this.props.match.params.slug]
    return (
      <main className="App-container">
        <div className="App-bodyCopy">
          <h1>{activity.title}</h1>
          <div>{activity.neighborhood} • {activity.grade}</div>
          { activity.website && <div><Link to={activity.website} target="_new">Website</Link></div>}
          <div dangerouslySetInnerHTML={this.renderDescription()} />
        </div>
      </main>
    )
  }
}

export default ActivityPage
