/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global createReactClass, React, ReactDOM */

var Post = createReactClass({
  render: function() {
    return <li>{this.props.title}</li>;
  }
});

var Posts = createReactClass({
  getInitialState: function() {
    return { posts: [] };
  },
  componentDidMount() {
    var self = this;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        self.setState({ posts: JSON.parse(xhr.responseText) });
      }
    };
    xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts', true);
    xhr.send();
  },
  render() {
    return (
      <ul>
        {this.state.posts.map(function(post, i) {
          return <Post key={i} title={post.title} />;
        })}
      </ul>
    );
  }
});

ReactDOM.render(<Posts />, document.getElementById('app'));
