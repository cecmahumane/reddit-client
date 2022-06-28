import React from 'react'
import Card from './Card'
import { v4 as uuidv4 } from 'uuid'
import { useGetRedditWorldNewsDataQuery } from '../app/services/redditWorldNewsData'

function Trending() {
  
  const { data, error, isLoading, isSuccess, isError } = useGetRedditWorldNewsDataQuery();
 
  function dataConfirm(data) {
    // console.log(data)
    let trendingData = data.data.children.slice(0,4);
    console.log(trendingData)
    let cardInfo = trendingData.map((data) => {
      return {
        key: uuidv4(),
        title: data.data.title,
        subredditName: data.data.subreddit_name_prefixed
      }
    })
    console.log(cardInfo)
    return cardInfo
  }

  return (
    <div>
        <h3>Trending</h3>
        {isLoading && 'Loading...'}
        {isError && error.message}
        {isSuccess && data && <Card cardInfo={dataConfirm(data)}/>}

    </div>
  )
}

export default Trending