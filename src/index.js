import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'

function renderApp() {
  render(
    <AppContainer>
      <App name="my super awesome app built with React" />
    </AppContainer>,
    document.getElementById('app')
  )
}

renderApp()

if (module.hot) {
  module.hot.accept('./App', renderApp)
}
