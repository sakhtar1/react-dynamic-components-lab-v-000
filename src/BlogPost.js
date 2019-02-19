import React, { Component } from 'react';
import Comment from './Comment'

export default class BlogPost extends Component {
  render() {

    return (
      <div id="blog-post" className="wrapper">
        Alright internet trolls<br/>
        Come at me<br/>
        I have been preparing<br/>
        My meme fortress is built<br/>
        I won't let you tilt me<br/>
        You only grew accustomed to the salt<br/>
        I was born in it<br/>

        {this.props.commentText}
        {this.props.commentText}
        {this.props.commentText}

      </div>
    );
  }
}
