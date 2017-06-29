import React from 'react'
import { render } from 'react-dom'
import App from './App'

const mountNode = document.getElementById('app')

render(
  <App name="my super awesome app built with React" />,
  mountNode
)
