/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

let Post = ({title}) => <li>{title}</li>;

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/posts').then(response => {
      response.json().then(json => {
        this.setState({ posts: json });
      })
    })
  }
  render() {
    return (
      <ul>{
        this.state.posts.map((post, i) => <Post key={i} title={post.title} />)
      }</ul>
    );
  }
}

ReactDOM.render(
  <Posts />,
  document.getElementById('app')
);