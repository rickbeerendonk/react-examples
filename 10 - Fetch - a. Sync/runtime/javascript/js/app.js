/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

const Post = ({title}) => React.createElement('li', null, title);

const PostList = ({posts}) =>  (
  React.createElement('ul', null,
  posts.map(function (post, i) {
    return React.createElement(Post, { key: i, title: post.title })
  })
));

// Container pattern:
// Container fetches data, then renders the sub-component.
class PostListContainer extends React.Component {
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
      React.createElement(PostList, {posts: this.state.posts})
    );
  }
}

ReactDOM.render(
  React.createElement(PostListContainer),
  document.getElementById('app')
);
