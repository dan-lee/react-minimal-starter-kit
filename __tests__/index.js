import React from 'react'
import App from '../src/App'
import renderer from 'react-test-renderer'

test('App is running', () => {
  const component = renderer.create(<App name="foo" />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
