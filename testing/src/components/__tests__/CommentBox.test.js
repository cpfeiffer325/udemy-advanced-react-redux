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

describe('comment box', () => {
  it('should have a text area', () => {
    expect(wrapped.find('textarea').length).toEqual(1)
  })
  
  it('should have a button', () => {
    expect(wrapped.find('button').length).toEqual(1)
  })
})

describe('text area', () => {
  beforeEach(() =>{
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    })
    wrapped.update()
  })

  it('should have a text area that a user can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
  })
  
  it('when form is submitted, text area gets emptied', () => {
    wrapped.find('form').simulate('submit')
    wrapped.update()
    expect(wrapped.find('textarea').prop('value')).toEqual('')
  })
})
