import React from 'react'
import SidePanelUnits from './SidePanelUnits'

function SidePanel(props) {

  let sidePanelItems = props.sidePanelData.map((result, index) => {
    return (
      <SidePanelUnits 
        rank={index + 1}
        title={result.title}
        key={result.key}
        id={result.id}
        preview={result.preview}
        />
    )
  })

  let images = {
    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${props.sidePanelData[0].preview})`
  }

  return (
    <div className='sidePanel-container'>
        <div className='sidePanel-header' style={images}>
          <h3 className='sidePanel-title'>Top Stories</h3>
        </div>
        {sidePanelItems}
    </div>
  )
}

export default SidePanel