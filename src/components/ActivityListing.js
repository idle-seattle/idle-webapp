import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './ActivityListing.css'

class ActivityListing extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { slug, title, neighborhood, address, grade, website, phone } = this.props
    return (
      <article className="ActivityListing">
        <Link to={`/activity/${slug}`} className="ActivityListing-link">
          <h3 className="ActivityListing-title">{title}</h3>
          {neighborhood} • {grade}
        </Link>
      </article>
    )
  }

}

ActivityListing.PropTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  neighborhood: PropTypes.string,
  address: PropTypes.string,
  grade: PropTypes.string,
  website: PropTypes.string,
  phone: PropTypes.string,
}

export default ActivityListing
