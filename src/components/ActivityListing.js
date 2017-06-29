import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { programAddressToString } from '../util'

import './ActivityListing.css'

class ActivityListing extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { slug, activity } = this.props
    const addressString = programAddressToString(activity)
    return (
      <article className="ActivityListing">
        {/* <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${addressString}&zoom=13&size=600x300&maptype=roadmap&scale=2&markers=color:green%7C${addressString}&key=${process.env.RAZZLE_GOOGLE_MAPS_KEY}`} className="ActivityPage-mapImage" /> */}
        <Link to={`/activity/${slug}`} className="ActivityListing-link">
          <h3 className="ActivityListing-title">{activity.title}</h3>
          {activity.neighborhood} • {activity.grade}
        </Link>
      </article>
    )
  }

}

ActivityListing.PropTypes = {
  activity: PropTypes.object,
  slug: PropTypes.string,
}

export default ActivityListing
