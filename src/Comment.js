// add Comment component here
import React, { Component } from 'react'


export default class Comment extends Component {

  render() {

    return (
      <div className="color-box" style={{opacity: 2}}>
        {this.props.commentText}
      </div>
    )
  }

}
