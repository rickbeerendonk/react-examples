/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component, createElement } from 'react';

import ErrorMessage from './ErrorMessage.js';
import Fetching from './Fetching.js';
import PostList from './PostList.js';

// Container pattern:
// Container fetches data, then renders the sub-component.
class PostListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: '',
      isFetching: false
    };

    // Bind this for methods we create ourselves
    this.fetchPosts = this.fetchPosts.bind(this);
  }
  componentDidMount() {
    this.fetchPosts();
  }
  fetchPosts() {
    var self = this;
    self.setState({ isFetching: true });
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      self.setState({ isFetching: false });
    };
    xhr.onerror = function () {
      self.setState({ error: 'An error occurred.' });
    };
    xhr.ontimeout = function () {
      self.setState({ error: 'Timeout.' });
    };
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
      return createElement(Fetching);
    }

    if (this.state.error) {
      return createElement(ErrorMessage, { message: this.state.error });
    }

    return createElement(PostList, { posts: this.state.posts });
  }
}

export default PostListContainer;
