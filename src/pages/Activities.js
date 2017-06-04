import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import activityData, { activitySlugs } from '../activityData'
import ActivityListing from '../components/ActivityListing'

class Activities extends Component {
  render() {
/*
    for (const activity in activityData) {
      console.log(activityData[activity])
    }
*/
    return (
      <main className="App-container">
        <div className="App-bodyCopy">
          <h1>Activities</h1>
          <p>What do you want to learn more about? Computers? Robotics?</p>

          { activitySlugs.map((slug) => {
            const activity = activityData[slug]
            return(
              <ActivityListing
                title={activity.title}
                neighborhood={activity.neighborhood}
                grade={activity.grade}
                key={slug}
                slug={slug}
              />
            )
          })}

        </div>
      </main>
    )
  }
}


export default Activities
