import 'babel-polyfill'
import React from 'react'
import PropTypes from 'prop-types'

const App = props => <div>Welcome to {props.name}</div>

App.propTypes = {
  name: PropTypes.string,
}

export default App
