/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

const Post = ({ title }) => <li>{title}</li>;

const PostList = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <Post key={post.id} title={post.title} />
    ))}
  </ul>
);

const ErrorMessage = ({ message }) => (
  <div style={{ color: 'red' }}>{message}</div>
);

const Fetching = () => (
  <React.Fragment>
    <img
      src="../../../../resources/oblicum-square.svg"
      className="oblicum-spinner"
      alt="Fetching..."
    />
    Fetching...
  </React.Fragment>
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

    // Bind this for methods we create ourselves
    this.fetchPosts = this.fetchPosts.bind(this);
  }
  async componentDidMount() {
    await this.fetchPosts();
  }
  async fetchPosts() {
    this.setState({ isFetching: true });
    try {
      const response = await fetch('posts.json');
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      this.setState({ posts: json });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isFetching: false });
    }
  }
  render() {
    return (
      <React.Fragment>
        {this.state.isFetching && <Fetching />}

        {this.state.error ? (
          <ErrorMessage message={this.state.error} />
        ) : (
          <PostList posts={this.state.posts} />
        )}
      </React.Fragment>
    );
  }
}

ReactDOM.render(<PostListContainer />, document.getElementById('app'));
