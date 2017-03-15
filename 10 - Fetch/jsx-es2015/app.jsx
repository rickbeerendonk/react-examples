/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

let Post = ({title}) => <li>{title}</li>;

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], error: 'test' };
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json()
      })
      .then(json => { this.setState({ posts: json }); })
      .catch(error => { this.setState({ error: error.message }) });
  }
  render() {
    return (
      <div>
        <div style={{color: 'red'}}>{this.state.error}</div>
        <ul>{
          this.state.posts.map((post, i) => <Post key={i} title={post.title} />)
        }</ul>
      </div>
    );
  }
}

ReactDOM.render(
  <Posts />,
  document.getElementById('app')
);