import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

export default () => {
  renderButton() {
    if (this.props.auth) {
      return <button>Sign Out</button>
    } else {
      return <button>Sign In</button>
    }
  }

  return (
    <div>
      {this.renderHeader()}
      <Route path="/post" component={CommentBox} />
      <Route path="/" exact component={CommentList} />
    </div>
  )
}

function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(App)
