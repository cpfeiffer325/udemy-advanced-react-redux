import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'

class CommentBox extends Component {
  state = { comment: '' }

  handleChange = e => {
    this.setState({ comment: e.target.value })
  }

  formSubmit = e => {
    e.preventDefault()

    this.props.saveComment(this.state.comment)
    this.setState({ comment: '' })
  }
  
  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <h4>Add a Comment</h4>
        <textarea onChange={this.handleChange} value={this.state.comment} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    )
  }
}

export default connect(null, actions)(CommentBox)
