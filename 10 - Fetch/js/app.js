/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

var Post = React.createClass({
  displayName: 'Post',
  render: function () {
    return React.createElement('li', null, this.props.title);
  }
});

var Posts = React.createClass({
  displayName: 'Posts',
  getInitialState: function () {
    return { posts: [] };
  },
  componentDidMount() {
    var self = this;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        self.setState({ posts: JSON.parse(xhr.responseText) });
      }
    };
    xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts', true);
    xhr.send();
  },
  render() {
    return (
      React.createElement('ul', null,
        this.state.posts.map(function (post, i) {
          return React.createElement(Post, { key: i, title: post.title })
        })
      )
    );
  }
});

ReactDOM.render(
  React.createElement(Posts),
  document.getElementById('app')
);