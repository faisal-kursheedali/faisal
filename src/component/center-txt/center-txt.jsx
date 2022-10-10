import React from 'react'
import "./center-txt.css"

const CenterTxt = ({data}) => {
  return (
    <div className="center-txt-container">
        <div className="center-txt">
            {data}
        </div>
    </div>
  )
}

export default CenterTxt