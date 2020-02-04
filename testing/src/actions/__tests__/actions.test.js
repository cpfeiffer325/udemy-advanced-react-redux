import { saveComment } from 'actions'
import { SAVE_COMMENT } from 'actions/types'

describe('Save comment', () => {
  it('has the correct type', () => {
    const action = saveComment()
    expect(action.type).toEqual(SAVE_COMMENT)
  })

  it('has the correct payload', () => {
    const action = saveComment('Another Comment')
    expect(action.payload).toEqual('Another Comment')
  })
})