import React from 'react'

class AddQuote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: undefined
    }
    this.handleAddQuote = this.handleAddQuote.bind(this)
  }
  handleAddQuote(e) {
    e.preventDefault()
    const content = e.target.elements.content.value.trim()
    const error = this.props.handleAddQuote(content)
    e.target.elements.content.value = ''

    this.setState(() => ({ error }))
  }
  render() {
    return (
      <div>
        {this.state.error && <p className="add-quote-error">{this.state.error}</p>}
        <form className="add-quote" onSubmit={this.handleAddQuote}>
          <input className="add-quote__input" type="text" name="content" />
          <button className="add_quote__button">Add quote</button>
        </form> 
      </div>
    )
  }
}

export default AddQuote