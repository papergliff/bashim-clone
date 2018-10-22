import React from 'react'

const Categories = props => (
  <div>
    <nav>
      <button onClick={props.showAllQuotes}>Новое</button>
      <button onClick={props.showBestQuotes}>Лучшее</button>
    </nav>
  </div>
)

export default Categories
