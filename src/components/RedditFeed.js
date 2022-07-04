import React from 'react'
import ArrowUp from '../images/Arrow-up.png'
import ArrowDown from '../images/Arrow-down.png'
import Chat from '../images/Chat.png'
import OrangeArrowUp from '../images/OrangeArrowUp.png'
import BlueArrowDown from '../images/BlueArrowDown.png'

function RedditFeed(props) {

  // console.log(props.thumbnail)

  function thumbnailExists(props) {
    if (props.thumbnail !== 'default' && props.thumbnail !== 'self' && props.thumbnail !== 'nsfw') {
      return  <div style={{
        height: "100px",
        width: "140px",
        objectFit: "cover",
        border: "1px solid #0079D3",
        borderRadius: '4px',
        marginRight: '8px',
        backgroundImage: `url(${props.thumbnail})`,
      }} className='feed-thumbnail' alt=''div></div>
    }
  }

  function previewExists(props) {
    if (props.thumbnail === 'default' || props.thumbnail === 'self' || props.thumbnail === 'nsfw') {
      return <img className='feed-item-preview-image' src={props.preview} alt=''/>;
    }
  }
  // console.log(props.thumbnail)
  return (
    <div className='feed-item'>
          <div className='feed-item-karma'>
            <img src={ArrowUp} onMouseOver={e => (e.currentTarget.src=OrangeArrowUp)} onMouseOut={e => (e.currentTarget.src=ArrowUp)} alt='' className='arrowup'/>
            <p className='karma-score'>{props.score}</p>
            <img src={ArrowDown} onMouseOver={e => (e.currentTarget.src=BlueArrowDown)} onMouseOut={e => (e.currentTarget.src=ArrowDown)} alt='' className='arrowdown'/>
          </div>
          <div className='feed-item-content'>
            <div className='feed-item-header'>
              <p className='feed-item-content-info'><span className='feed-subredditNamePrefix'>{props.subredditNamePrefix}</span> <span className='feed-author'>* Posted by u/{props.author} {props.created} hours ago</span></p>
            </div>
            <h4 className='feed-item-title'>{props.title}</h4>
            <div className='thumbnail'>
              {thumbnailExists(props)}
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