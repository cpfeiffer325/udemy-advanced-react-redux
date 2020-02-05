import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'

class CommentBox extends Component {
  state = { comment: '' }
  
  // component just got rendered
  componentDidMount() {
    this.shouldNavigateAway()
  }
  
  // component just got updated
  componentDidUpdate() {
    this.shouldNavigateAway()
  }

  shouldNavigateAway() {
    if(!this.props.auth) {
      this.props.history.push('/')
    }
  }

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
      <div>
        <form onSubmit={this.formSubmit}>
          <h4>Add a Comment</h4>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps, actions)(CommentBox)
