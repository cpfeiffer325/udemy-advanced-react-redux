import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import CommentBox from '../CommentBox'

it('Should show a comment box', () => {
  const wrapped = shallow(<App />)

  expect(wrapped.find(CommentBox).length).toEqual(1)
})
