import React from 'react'
import { mount } from 'enzyme'
import CommentBox from 'components/CommentBox'

let wrapped

beforeEach(() => {
  wrapped = mount(<CommentBox />)
})

afterEach(() => {
  wrapped.unmount()
})

it('should have a text area', () => {
  expect(wrapped.find('textarea').length).toEqual(1)
})

it('should have a button', () => {
  expect(wrapped.find('button').length).toEqual(1)
})
