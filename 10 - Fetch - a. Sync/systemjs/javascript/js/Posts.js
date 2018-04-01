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
    xhr.onload = function () {
      self.setState({ isFetching: false });
    }
    xhr.onerror = function () {
      self.setState({ error: 'An error occurred.' });
    }
    xhr.ontimeout = function () {
      self.setState({ error: 'Timeout.' });
    }
    xhr.onreadystatechange = function () {
      if (this.readyState == XMLHttpRequest.DONE) {
        if (this.status == 200) {
          self.setState({ posts: JSON.parse(xhr.responseText) });
        } else {
          self.setState({ error: this.statusText });
        }
      }  
    };
    xhr.open('GET', 'posts.json', true);
    xhr.send();
  }
  render() {
    if (this.state.isFetching) {
      return "Fetching...";
    }

    if (this.state.error) {
      return React.createElement('div', {style: {color: 'red'}}, this.state.error);
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
