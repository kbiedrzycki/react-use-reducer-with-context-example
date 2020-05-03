import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { env } from './env'

if (env.MOCK_SERVER === 'true') {
  require('./mock-server')
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
