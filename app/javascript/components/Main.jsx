import React from 'react'
import Quotes from './Quotes'
import AddQuote from './AddQuote'
import Categories from './Categories'
import '../styles/styles.css'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quotes: [],
      active: 0,
    }

    this.handleAddQuote = this.handleAddQuote.bind(this)
    this.addNewQuote    = this.addNewQuote.bind(this)
    this.showBestQuotes = this.showBestQuotes.bind(this)
    this.showAllQuotes  = this.showAllQuotes.bind(this)
  }
  handleAddQuote(content) {
    if (!content) {
      return 'Цитата не может быть пустой'
    }

    const body = JSON.stringify({ quote: { content } })

    fetch('http://localhost:3000/api/v1/quotes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    })
      .then(response => response.json())
      .then(quote => this.addNewQuote(quote))
  }
  addNewQuote(quote) {
    if (this.state.active === 1) return;
    this.setState({
      quotes: [quote].concat(this.state.quotes)
    })
  }
  showBestQuotes() {
    this.setState({
      quotes: this.state.quotes.filter(quote => quote.rating > 0).sort((a, b) => b.rating - a.rating),
      active: 1,
    })
  }
  showAllQuotes() {
    fetch('/api/v1/quotes.json')
      .then(response => response.json())
      .then(data => this.setState({ quotes: data, active: 0 }))
  }
  componentDidMount() {
    this.showAllQuotes()
  }

  render() {
    return (
      <div>
        <h1>Цитаты:</h1>
          <Categories 
            showAllQuotes={this.showAllQuotes}
            showBestQuotes={this.showBestQuotes}
          />
          <AddQuote handleAddQuote={this.handleAddQuote}/>
          <Quotes 
            quotes={this.state.quotes} 
          />
      </div>
    )
  }
}

export default Main
