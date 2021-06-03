import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import ThemeContainer from './components/Containers/ThemeContainer'

ReactDOM.render(
  <React.StrictMode>
    <ThemeContainer>
      <Router>
        <App />
      </Router>
    </ThemeContainer>
  </React.StrictMode>,
  document.getElementById('root')
)
