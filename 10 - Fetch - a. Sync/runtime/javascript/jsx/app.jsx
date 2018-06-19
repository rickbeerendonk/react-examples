/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

const Post = ({ title }) => <li>{title}</li>;

const PostList = ({ posts }) => (
  <ul>{
    posts.map(post => <Post key={post.id} title={post.title} />)
  }</ul>
);

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
    this.setState({ isFetching: true });
    fetch('posts.json')
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => { this.setState({ posts: json }); })
      .catch(error => { this.setState({ error: error.message }); })
      .finally(() => { this.setState({ isFetching: false }); });
  }
  render() {
    return (
      <React.Fragment>
        {this.state.isFetching &&
          <div>
            <img src="../../../../resources/oblicum-square.svg" className="oblicum-spinner" />
            Fetching...
          </div>
        }

        {this.state.error
          ? <div style={{ color: 'red' }}>{this.state.error}</div>
          : <PostList posts={this.state.posts} />}
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <PostListContainer />,
  document.getElementById('app')
);
