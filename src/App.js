import React, { Component } from 'react';

import Posts from './components/Posts';
import Selector from './components/Selector';
import { Context } from './components/RedditContext';
import RefreshButton from './components/RefreshButton';

class App extends Component {
  componentDidMount() {
    const { fetchPosts } = this.context;
    fetchPosts();
  }

  renderLastUpdatedAt() {
    const { selectedSubreddit, postsBySubreddit } = this.context;
    const { lastUpdated } = postsBySubreddit[selectedSubreddit];

    if (!lastUpdated) return null;

    return (
      <span>
        {`Last updated at ${new Date(lastUpdated).toLocaleTimeString()}.`}
      </span>
    );
  }

  render() {
    const { selectedSubreddit, postsBySubreddit, isFetching } = this.context;
    const { items: posts = [] } = postsBySubreddit[selectedSubreddit];
    const isEmpty = posts.length === 0;

    return (
      <div>
        <Selector />
        <div>
          {this.renderLastUpdatedAt()}
          <RefreshButton />
        </div>
        {isFetching && <h2>Loading...</h2>}
        {!isFetching && isEmpty && <h2>Empty.</h2>}
        {!isFetching && !isEmpty && <Posts />}
      </div>
    );
  }
}

App.contextType = Context;

export default App;