import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import BackButton from '../components/BackButton'
import programData, { programSlugs } from '../programData'
import * as Util from '../util'

import './ProgramPage.css'

class ProgramPage extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount = () => {
  }

  renderDescription() {
    const program = programData[this.props.match.params.slug]
    return {__html: program.description}
  }

  render() {
    const program = programData[this.props.match.params.slug]
    // We call this addressString multiple times, so let’s define it once
    // so that the util function only needs to execute once
    const addressString = Util.programAddressToString(program)
    return (
      <main className="App-container">
        <article className="App-bodyCopy">
          <header className="App-pageHeader ProgramPage-pageHeader">
            <Link to='/' className="App-backButton">Back</Link>
            { program.address1 && <a href={`https://www.google.com/maps/place/${addressString}`} target="_new"><img src={`https://maps.googleapis.com/maps/api/staticmap?center=${addressString}&zoom=13&size=600x300&maptype=roadmap&scale=2&markers=color:green%7C${addressString}&key=${process.env.RAZZLE_GOOGLE_MAPS_KEY}`} className="programPage-mapImage" /></a> }
            <h1 className="App-pageTitle">{program.title}</h1>
            <div className={`App-color-${Util.stringToClassName(program.category)}`}>{program.category}</div>
            <div>{program.neighborhood} • {program.grade}</div>
            { program.website && <div><a href={program.website} target="_new">Website</a></div>}
          </header>
          <div dangerouslySetInnerHTML={this.renderDescription()} />
        </article>
      </main>
    )
  }
}

export default ProgramPage
