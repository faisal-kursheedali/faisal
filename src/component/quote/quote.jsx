import React from 'react'
import "./quote.css"

const Quote = ({quote,author}) => {
  return (
    <div className="quote-container">
        {
            quote?<div className="quote">
            " {quote} "
        </div>:""
        }
        
        {
            author?<div className="quote-author">
            - {author}
        </div>:""
        }
    </div>
  )
}

export default Quote