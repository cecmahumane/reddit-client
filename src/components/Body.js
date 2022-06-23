import React from 'react'
import RedditFeed from './RedditFeed'
import PopularPosts from './PopularPosts'
import Trending from './Trending'
import SidePanel from './SidePanel'

function Body() {
  return (
    <div>
        <h2>Body</h2>
        <div>
            <Trending />
            <PopularPosts />
            <RedditFeed />   
        </div>
        <SidePanel />
    </div>
  )
}

export default Body