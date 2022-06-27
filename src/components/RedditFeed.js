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
            <div className='feed-content-and-thumbnail'>
              <div>
                <p className='feed-item-content-info'><span className='feed-subredditNamePrefix'>{props.subredditNamePrefix}</span> <span className='feed-author'>* Posted by u/{props.author}</span></p>
                <h3>{props.title}</h3>
              </div>
                <div>
                  {(props.thumbnail !== "default" && props.thumbnail !== "self" && props.thumbnail !== "nsfw") && <img className='feed-thumbnail' src={props.thumbnail}/>}
                </div>
              </div>
              <div className='feed-item-content-comments'>
                  <img src={Chat}/>
                  <p>{props.numComments} Comments</p>
              </div>
          </div>
    </div>
  )
}

export default RedditFeed