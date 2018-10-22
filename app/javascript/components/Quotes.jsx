import React from 'react'
import Quote from './Quote'

const Quotes = props => (
  <div>
    {props.quotes.map((quote) => (
      <Quote 
        key={quote.id}
        quote={quote}
      />
    ))}
  </div>
)

export default Quotes