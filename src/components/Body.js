import React from 'react'
import RedditFeed from './RedditFeed'
import PopularPosts from './PopularPosts'
import Trending from './Trending'
import SidePanel from './SidePanel'
import { useGetRedditWorldNewsDataQuery } from '../app/services/redditWorldNewsData'
import { v4 as uuidv4} from 'uuid'
import jsonata from 'jsonata'

function Body(props) {

  const { data, error, isLoading, isSuccess, isError } = useGetRedditWorldNewsDataQuery();

  function dataConfirm(data) {
    let imageConfirm = jsonata('data.preview.images[0].resolutions')
    let trendingData = data.data.children.slice(0,4);
    let cardInfo = trendingData.map((data) => {
      let resolutions = imageConfirm.evaluate(data)
      let output = {
        key: uuidv4(),
        title: data.data.title,
        subredditNamePrefixed: data.data.subreddit_name_prefixed,
        thumbnail: data.data.thumbnail
      }
      if (resolutions) {
        output.preview = htmlDecode(resolutions[resolutions.length - 1].url);
      }
      console.log(output.preview)
      return output
    })
    
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
        created={postData.created}
        />
    )
  })
  
  function htmlDecode(input) {
    let doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }  

  return (
    <div className='body'>
        <div>
            {isLoading && 'Loading...'}
            {isError && error.message}
            {isSuccess && data && <Trending trendingData={dataConfirm(data)}/>}
        </div>
        <h3 className='pp-header'>PopularPosts</h3>
        <div className='pp-redditFeed-sidePanel'>
          <div className='pp-and-redditFeed'>
            <PopularPosts />
            {redditFeedItems}
          </div>
          <SidePanel />
        </div>
    </div>
  )
}

export default Body