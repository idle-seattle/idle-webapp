import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as Util from '../util'

import './ProgramListing.css'

class ProgramListing extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { slug, program } = this.props
    const addressString = Util.programAddressToString(program)
    return (
      <article className="ProgramListing">
        {/* <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${addressString}&zoom=13&size=600x300&maptype=roadmap&scale=2&markers=color:green%7C${addressString}&key=${process.env.RAZZLE_GOOGLE_MAPS_KEY}`} className="ProgramPage-mapImage" /> */}
        <Link to={`/program/${slug}`} className="ProgramListing-link">
          <h3 className="ProgramListing-title">{program.title}</h3>
          <div className={`ProgramListing-category App-color-${Util.stringToClassName(program.category)}`}>{program.category}</div>
          {program.neighborhood} • {program.grade}
        </Link>
      </article>
    )
  }

}

ProgramListing.PropTypes = {
  program: PropTypes.object,
  slug: PropTypes.string,
}

export default ProgramListing
