import React from 'react'

function Card(props) {
  return (
    <div className='card-box'>
        {(props.thumbnail !== "default" && props.thumbnail !== "self" && props.thumbnail !== "nsfw") && <div className='card-thumbnail' src={props.thumbnail}>
                  </div>}    
        <p>{props.title}</p>
        <p>{props.subredditNamePrefixed}</p>
    </div>
  )
}

export default Card