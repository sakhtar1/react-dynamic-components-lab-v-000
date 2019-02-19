// add Comment component here
import React, { Component } from 'react'
import BlogPost from './BlogPost'

export default class Comment extends Component {

  render() {
  
    return (
      <div className="color-box" style={{opacity: 2}}>
        <BlogPost />
      </div>
    )
  }

}
