import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'

import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import ActivityPage from './pages/ActivityPage'

const App = () => (
  <Switch>
    <Layout>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/activity/:slug" component={ActivityPage} />
    </Layout>
  </Switch>
)

export default App
