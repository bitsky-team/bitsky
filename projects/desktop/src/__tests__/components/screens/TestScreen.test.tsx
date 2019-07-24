import React from 'react'
import {shallow, ShallowWrapper} from 'enzyme'
import {TestScreen} from '../../../components/TestScreen'

it('renders without crashing', (): void => {
  shallow(<TestScreen/>)
})

it('increase the counter when the button is clicked', (): void => {
  const screen = shallow(<TestScreen/>)
  const button = (): ShallowWrapper => screen.find('[data-testid="counterButton"]')
  const title = (): string => screen.find('h1').text()

  button().simulate('click')
  expect(title()).toContain('1')
  expect(title()).toContain('time')

  button().simulate('click')
  expect(title()).toContain('2')
  expect(title()).toContain('times')
})
