/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

/* global React, ReactDOM */

function Post({ title }) {
  return React.createElement('li', null, title);
}

function PostList({ posts }) {
  return React.createElement(
    'ul',
    null,
    posts.map(function (post, i) {
      return React.createElement(Post, { key: i, title: post.title });
    })
  );
}

function ErrorMessage({ message }) {
  return React.createElement('div', { style: { color: 'red' } }, message);
}

function Fetching() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement('img', {
      src: '../../../../../resources/oblicum-square.svg',
      className: 'oblicum-spinner',
      alt: 'Fetching...'
    }),
    'Fetching...'
  );
}

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
      return React.createElement(Fetching);
    }

    if (this.state.error) {
      return React.createElement(ErrorMessage, { message: this.state.error });
    }

    return React.createElement(PostList, { posts: this.state.posts });
  }
}

ReactDOM.render(
  React.createElement(PostListContainer),
  document.getElementById('root')
);
