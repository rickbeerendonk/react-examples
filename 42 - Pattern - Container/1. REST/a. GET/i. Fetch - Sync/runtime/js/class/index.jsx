/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

/* global React, ReactDOM */

function Post({ title }) {
  return <li>{title}</li>;
}

function PostList({ posts }) {
  return (
    <ul>
      {posts.map(post => (
        <Post key={post.id} title={post.title} />
      ))}
    </ul>
  );
}

function ErrorMessage({ message }) {
  return <div style={{ color: 'red' }}>{message}</div>;
}

function Fetching() {
  return (
    <React.Fragment>
      <img
        src="../../../../../resources/oblicum-square.svg"
        className="oblicum-spinner"
        alt="Fetching..."
      />
      Fetching...
    </React.Fragment>
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
    this.fetchPosts();
  }
  fetchPosts() {
    this.setState({ isFetching: true });
    fetch('posts.json')
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => {
        this.setState({ posts: json });
      })
      .catch(error => {
        this.setState({ error: error.message });
      })
      .finally(() => {
        this.setState({ isFetching: false });
      });
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PostListContainer />);
