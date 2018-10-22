import React from 'react'

class Quote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: 0
    }

    this.handleUpVote      = this.handleUpVote.bind(this)
    this.handleDownVote    = this.handleDownVote.bind(this)
    this.updateQuoteRating = this.updateQuoteRating.bind(this)
  }

  componentDidMount() {
    this.setState({ rating: this.props.quote.rating })
  }

  handleUpVote(quoteId) {
    if (sessionStorage.getItem(`${quoteId} updated`)) {
      return this.setState({ rating: '(･_･ )' })
    }
    fetch(`http://localhost:3000/api/v1/quotes/${quoteId}/upvote`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(quote => this.updateQuoteRating(quote))
  }
  handleDownVote(quoteId) {
    if (sessionStorage.getItem(`${quoteId} updated`)) {
      return this.setState({ rating: '( ･_･)' })
    }
    fetch(`http://localhost:3000/api/v1/quotes/${quoteId}/downvote`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(quote => this.updateQuoteRating(quote))
  }
  updateQuoteRating(quote) {
    this.setState({ rating: quote.rating })
    sessionStorage.setItem(`${quote.id} updated`, 'true')
  }

  render() {
    return(
      <div className="quote-rating">
        <div>
          <input 
            className="quote-rating__upvote" 
            type="button" 
            value="+" 
            onClick={() => this.handleUpVote(this.props.quote.id)}
          />
          <span className="quote-rating__rating">  {this.state.rating}  </span>
          <input
            className="quote-rating__downvote"
            type="button"
            value="-"
            onClick={() => this.handleDownVote(this.props.quote.id)} 
          />
        </div>
        <p className="quote__content">{this.props.quote.content}</p>
      </div>
    )
  }
}
  

export default Quote