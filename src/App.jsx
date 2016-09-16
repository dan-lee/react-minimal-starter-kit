import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render () {
    return (
      <div>
        Welcome to {this.props.name}.
      </div>
    )
  }
}

const mountNode = document.getElementById('app')
render(<App name="my super awesome app built with React" />, mountNode)
