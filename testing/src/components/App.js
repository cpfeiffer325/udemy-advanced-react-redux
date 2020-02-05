import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

export default class App extends Component {
  renderButton() {
    
  }
  
  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post A Comment</Link>
        </li>
        <li>
          <Link to="/">{this.renderButton()}</Link>
        </li>
      </ul>
    )
  }

  render() {
    return (
      <div>
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    )
  }
}
