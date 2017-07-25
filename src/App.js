import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'

import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import ProgramPage from './pages/ProgramPage'

const App = () => (
  <Switch>
    <Layout>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/program/:slug" component={ProgramPage} />
    </Layout>
  </Switch>
)

export default App
