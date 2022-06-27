import React from 'react'
import RedditFeed from './RedditFeed'
import PopularPosts from './PopularPosts'
import Trending from './Trending'
import SidePanel from './SidePanel'

function Body(props) {

  const redditFeedItems = props.popularPostsData.map(postData => {
    return (
      <RedditFeed 
        title={postData.title}
        score={postData.score}
        subredditNamePrefix={postData.subredditNamePrefix}
        numComments={postData.numComments}
        author={postData.author}
        thumbnail={postData.thumbnail}
        />
    )
  })
    
  return (
    <div className='body'>
        <div>
            <Trending />
            <PopularPosts />
            {redditFeedItems}
        </div>
        <SidePanel />
    </div>
  )
}

export default Body