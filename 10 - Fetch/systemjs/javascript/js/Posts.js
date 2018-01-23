/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

import Post from 'Post';

export default class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      posts: [], 
      error: '', 
      isFetching: false 
    };
  }
  componentDidMount() {
    var self = this;
    self.setState({ isFetching: true });
    var xhr = new XMLHttpRequest();
    xhr.onerror = function () {
      self.setState({ error: 'An error occurred.', isFetching: false });
    }
    xhr.onreadystatechange = function () {
      if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        self.setState({ posts: JSON.parse(xhr.responseText), isFetching: false });
      }
    };
    xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts', true);
    xhr.send();
  }
  render() {
    if (this.state.isFetching) {
      return "Fetching...";
    }

    return (
      React.createElement('ul', null,
        this.state.posts.map(function (post, i) {
          return React.createElement(Post, { key: i, title: post.title })
        })
      )
    );
  }
}
