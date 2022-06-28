import React from 'react'

function Card(props) {
  
  const trimTitle = (props) => {
    if (props.title.length > 70) {
      return `${props.title.slice(0, 70)}...`
    } else {
      return props.title
    }
  }
  
  return (
    <div className='card-box'>
        {(props.thumbnail !== "default" && props.thumbnail !== "self" && props.thumbnail !== "nsfw") && <div className='card-thumbnail' src={props.thumbnail}>
                  </div>}    
        <p>{trimTitle(props)}</p>
        <p>{props.subredditNamePrefixed}</p>
    </div>
  )
}

export default Card