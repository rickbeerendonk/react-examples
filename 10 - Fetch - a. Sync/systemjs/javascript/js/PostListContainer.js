/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

import PostList from 'PostList';

// Container pattern:
// Container fetches data, then renders the sub-component.
export default class PostListContainer extends React.Component {
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
    xhr.onload = function() {
      self.setState({ isFetching: false });
    };
    xhr.onerror = function() {
      self.setState({ error: 'An error occurred.' });
    };
    xhr.ontimeout = function() {
      self.setState({ error: 'Timeout.' });
    };
    xhr.onreadystatechange = function() {
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
      return React.createElement(
        React.Fragment,
        null,
        React.createElement('img', {
          src: '../../../../resources/oblicum-square.svg',
          className: 'oblicum-spinner',
          alt: 'Fetching...'
        }),
        'Fetching...'
      );
    }

    if (this.state.error) {
      return React.createElement(
        'div',
        { style: { color: 'red' } },
        this.state.error
      );
    }

    return React.createElement(PostList, { posts: this.state.posts });
  }
}
