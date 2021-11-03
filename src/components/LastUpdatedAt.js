import React, { useContext } from "react";
import { Context } from "./RedditContext";
  
 const LastUpdatedAt = () => {
  const { selectedSubreddit, postsBySubreddit } = useContext(Context);
  const { lastUpdated } = postsBySubreddit[selectedSubreddit];

  if (!lastUpdated) return null;

  return (
    <span>
      {`Last updated at ${new Date(lastUpdated).toLocaleTimeString()}.`}
    </span>
  );
}

export default LastUpdatedAt;
