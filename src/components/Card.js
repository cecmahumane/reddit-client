import React from 'react'

function Card(props) {
  
  const trimTitle = (props) => {
    if (props.title.length > 70) {
      return `${props.title.slice(0, 70)}...`
    } else {
      return props.title
    }
  }
  
  let images = {
    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${props.preview})`
  }
  console.log(props.preview)
  return (
    <div className='card-box'>
        <div className='card-image-box' style={images}>
        </div>
        <h5 className='card-title'>{trimTitle(props)}</h5>
        <p className='card-subredditName'>{props.subredditNamePrefixed}</p>
    </div>
  )
}

export default Card