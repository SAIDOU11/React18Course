import React from 'react'
import ReactDOM from 'react-dom/client'

function FirstComponent() {
  return <h2>Hello World</h2>
}

// function FirstComponent() {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h2', {}, 'Hello World')
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<FirstComponent />)
