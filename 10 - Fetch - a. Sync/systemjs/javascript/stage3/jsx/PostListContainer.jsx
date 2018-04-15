/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

import PostList from './PostList';

// Container pattern:
// Container fetches data, then renders the sub-component.
export default class PostListContainer extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  state = { posts: [], error: '', isFetching: false };

  componentDidMount() {
    this.setState({ isFetching: true });
    fetch('posts.json')
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json()
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
            <img src="../../../../../resources/oblicum-square.svg" className="oblicum-spinner" />
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
