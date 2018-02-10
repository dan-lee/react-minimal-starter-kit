import 'babel-polyfill'
import React from 'react'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'

const App = props => <div>Welcome to {props.name}</div>

App.propTypes = {
  name: PropTypes.string,
}

export default hot(module)(App)
