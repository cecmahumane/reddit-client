import React from 'react'
import ArrowUp from '../images/Arrow-up.png'
import ArrowDown from '../images/Arrow-down.png'
import Chat from '../images/Chat.png'

function RedditFeed(props) {

  // console.log(props.thumbnail)

  function thumbnailExists(props) {
    if (props.thumbnail) {
      return  <img src={props.thumbnail} alt=''/>
    }
  }

  function previewExists(props) {
    if (props.thumbnail === false) {
      return <img className='feed-item-preview-image' src={props.preview} alt=''/>;
    }
  }

  return (
    <div className='feed-item'>
          <div className='feed-item-karma'>
            <img src={ArrowUp} alt='' className='arrowup'/>
            <p className='karma-score'>{props.score}</p>
            <img src={ArrowDown} alt='' className='arrowdown'/>
          </div>
          <div className='feed-item-content'>
            <div className='feed-item-header'>
              <p className='feed-item-content-info'><span className='feed-subredditNamePrefix'>{props.subredditNamePrefix}</span> <span className='feed-author'>* Posted by u/{props.author} {props.created} hours ago</span></p>
            </div>
            <h3 className='feed-item-title'>{props.title}</h3>
            <div className='thumbnail'>
              {thumbnailExists(props)}
              {/* <p>Thumbnail Placeholder</p> */}
            </div>
            <div className='feed-item-preview' >
              {previewExists(props)}
            </div>
            <div className='feed-item-content-comments'>
                <img src={Chat} alt=''/>
                <p>{props.numComments} Comments</p>
            </div>
          </div>
    </div>
  )
}

export default RedditFeed