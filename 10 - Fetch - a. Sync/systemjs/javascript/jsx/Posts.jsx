/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

import Post from './Post';

export default class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      posts: [], 
      error: '', 
      isFetching: false 
    };
  }
  componentDidMount() {
    this.setState({isFetching: true});
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
      <div>
        {this.state.isFetching && <div>Fetching...</div>}
        {this.state.error ? <div style={{color: 'red'}}>{this.state.error}</div> : null}
        <ul>{
          this.state.posts.map((post) => <Post key={post.id} title={post.title} />)
        }</ul>
      </div>
    );
  }
}
