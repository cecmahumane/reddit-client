import React from 'react'
import Fire from '../images/Fire.png'
import CaretDown from '../images/CaretDown.png'
import CircleWavy from '../images/CircleWavy.png'
import ChartBar from '../images/ChartBar.png'
import ThreeDots from '../images/Three-dots.png'

function PopularPosts(props) {
  return (
    <div>
        <div className='pp-box'>
          {/* <div className='pp-hot-box' onClick={() => props.toggleHotButton()}>
            <img className='pp-hot-image' src={Fire} alt=''/> 
            <p>Hot</p>
          </div> */}
          <button className='pp-hot-box' onClick={() => props.toggleHotButton()}><img className='pp-hot-image' src={Fire} alt=''/> Hot</button>
          <div className='pp-region-box'>
            <p>Canada</p>
            <img className='pp-region-arrow' src={CaretDown} alt=''/>
          </div>
          <button className='pp-new-box' onClick={() => props.toggleNewButton()}><img className='pp-new-star' src={CircleWavy} alt=''/> New</button>
          <button className='pp-top-box' onClick={() => props.toggleTopButton()}><img className='pp-top-graph' src={ChartBar} alt=''/> Top</button>
          <div>
            <img className='pp-dots' src={ThreeDots} alt=''/>
          </div>
        </div>
    </div>
  )
}


export default PopularPosts