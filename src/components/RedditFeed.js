import React from 'react'
import ArrowUp from '../images/Arrow-up.png'
import ArrowDown from '../images/Arrow-down.png'
import Chat from '../images/Chat.png'

function RedditFeed(props) {


  return (
    <div className='feed-item'>
        <div className='feed-item-karma'>
          <img src={ArrowUp} alt='' className='arrowup'/>
          <p className='karma-score'>{props.score}</p>
          <img src={ArrowDown} alt='' className='arrowdown'/>
        </div>
        <div className='feed-item-content'>
          <p>{props.subredditNamePrefix} * Posted by u/{props.author}</p>
          <h3>{props.title}</h3>
          <div className='feed-item-content-comments'>
            <img src={Chat}/>
            <p>{props.numComments} Comments</p>
          </div>
        </div>
    </div>
  )
}

export default RedditFeed