import React from 'react'
import RedditFeed from './RedditFeed'
import PopularPosts from './PopularPosts'
import Trending from './Trending'
import SidePanel from './SidePanel'
import { useGetRedditWorldNewsDataQuery } from '../app/services/redditWorldNewsData'
import { v4 as uuidv4} from 'uuid'

function Body(props) {

  const { data, error, isLoading, isSuccess, isError } = useGetRedditWorldNewsDataQuery();

  function dataConfirm(data) {
    // console.log(data)
    let trendingData = data.data.children.slice(0,4);
    // console.log(trendingData)
    let cardInfo = trendingData.map((data) => {
      return {
        key: uuidv4(),
        title: data.data.title,
        subredditNamePrefixed: data.data.subreddit_name_prefixed,
        thumbnail: data.data.thumbnail
      }
    })
    // console.log(cardInfo)
    return cardInfo
  }

  const redditFeedItems = props.popularPostsData.map(postData => {
    return (
      <RedditFeed 
        key={postData.id}
        title={postData.title}
        score={postData.score}
        subredditNamePrefix={postData.subredditNamePrefix}
        numComments={postData.numComments}
        author={postData.author}
        thumbnail={postData.thumbnail}
        preview={postData.preview}
        // created={postData.created}
        />
    )
  })
    
  return (
    <div className='body'>
        <div>
            {isLoading && 'Loading...'}
            {isError && error.message}
            {isSuccess && data && <Trending trendingData={dataConfirm(data)}/>}
        </div>
        <h3 className='pp-header'>PopularPosts</h3>
        <div className='pp-and-redditFeed'>
          <div>
            <PopularPosts />
            {redditFeedItems}
          </div>
          <SidePanel />
        </div>
    </div>
  )
}

export default Body