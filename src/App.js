import React, { useContext, useEffect } from 'react';

import Posts from './components/Posts';
import Selector from './components/Selector';
import { Context } from './components/RedditContext';
import RefreshButton from './components/RefreshButton';
import LastUpdatedAt from './components/LastUpdatedAt';

function App() {
  const { selectedSubreddit, postsBySubreddit, isFetching, fetchPosts } = useContext(Context);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]); 

  const { items: posts = [] } = postsBySubreddit[selectedSubreddit];
  const isEmpty = posts.length === 0;

  return (
    <div>
      <Selector />
      <div>
        <LastUpdatedAt />
        <RefreshButton />
      </div>
      {isFetching && <h2>Loading...</h2>}
      {!isFetching && isEmpty && <h2>Empty.</h2>}
      {!isFetching && !isEmpty && <Posts />}
    </div>
  );

}

App.contextType = Context;

export default App;