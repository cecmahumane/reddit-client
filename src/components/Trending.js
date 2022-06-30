import React from 'react'
import Card from './Card'

function Trending(props) {


  let cards = props.trendingData.map((result) => {
    return (
      <Card 
        key={result.key}
        title={result.title}
        subredditNamePrefixed={result.subredditNamePrefixed}
        thumbnail={result.thumbnail}
        preview={result.preview}
      />
    )
  })
  // console.log(cards)

  return (
    <div>
      <h3 className='trending-title'>Trending today</h3>
      <div className='trending-box'>
          {cards}
      </div>
    </div>
  )
}

export default Trending