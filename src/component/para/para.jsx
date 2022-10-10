import React from 'react'
import "./para.css" 

const Para = ({head,sub,para}) => {
  return (
    <div className="para-container">
        <div className="para-header">
                {
                
                head?<div className="para-head">{head}</div>:""
                }
                {
                sub?
                <div className="para-sub">{sub}</div>

                :""
                }
        </div>
        {
            para?
            <div className="para">{para}</div>
            :""
        }
    </div>
  )
}

export default Para