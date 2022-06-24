import React from 'react'
import ArrowUp from '../images/Arrow-up.png'
import ArrowDown from '../images/Arrow-down.png'

function RedditFeed(props) {


  return (
    <div className='feed-item'>
        <div className='feed-item-karma'>
          <img src={ArrowUp}/>
          <p>{props.score}</p>
          <img src={ArrowDown}/>
        </div>
        <div className='feed-item-content'>
          <h3>{props.title}</h3>
        </div>
    </div>
  )
}

export default RedditFeed