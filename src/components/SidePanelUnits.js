import React from 'react'

function SidePanelUnits(props) {

    const trimTitle = (props) => {
        if (props.title.length > 70) {
          return `${props.title.slice(0, 70)}...`
        } else {
          return props.title
        }
      }

  return (
    <div>
      <div className='side-panel-unit-info'>
        <p>{props.rank}</p>
        <p className='side-panel-unit-title'>{trimTitle(props)}</p>
      </div>
      <hr className='side-panel-unit-hr'/>
    </div>
  )
}

export default SidePanelUnits