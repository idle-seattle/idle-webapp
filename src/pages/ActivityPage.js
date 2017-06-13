import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import BackButton from '../components/BackButton'

import './ActivityPage.css'

class ActivityPage extends Component {

  constructor(props) {
    super(props)
    let activity
    axios.get('/api/activities/')
      .then( (response) => {
        console.log(response.data[this.props.match.params.slug])
        this.setState({
          activity: response.data[this.props.match.params.slug]
        })
      })
      .catch( (error) => {
        console.error(error)
      })
    this.state = {
      activity: {}
    }
  }

  componentWillMount = () => {
  }

  componentDidMount = () => {
  }

  renderDescription = () => {
//    const activity = this.activityData
//    return {__html: activity.description}
  }

  render = () => {
    return (
      <h1>Title is {this.state.activity.title}</h1>
    )
/*
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

    */
  }
}

export default ActivityPage
