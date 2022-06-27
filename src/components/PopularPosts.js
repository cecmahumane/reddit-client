import React from 'react'
import Fire from '../images/Fire.png'
import CaretDown from '../images/CaretDown.png'
import CircleWavy from '../images/CircleWavy.png'
import ChartBar from '../images/ChartBar.png'
import ThreeDots from '../images/Three-dots.png'

function PopularPosts
() {
  return (
    <div>
        <h3>PopularPosts</h3>
        <div className='pp-box'>
          <div className='pp-hot-box'>
            <img className='pp-hot-image' src={Fire} alt=''/> 
            <p>Hot</p>
          </div>
          <div className='pp-region-box'>
            <p>Canada</p>
            <img className='pp-region-arrow' src={CaretDown} alt=''/>
          </div>
          <div className='pp-new-box'>
            <img className='pp-new-star' src={CircleWavy} alt=''/>
            <p>New</p>
          </div>
          <div className='pp-top-box'>
            <img className='pp-top-graph' src={ChartBar} alt=''/>
            <p>Top</p>
          </div>
          <div>
            <img className='pp-dots' src={ThreeDots} alt=''/>
          </div>
        </div>
    </div>
  )
}


export default PopularPosts