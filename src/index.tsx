import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'
import { BrowserRouter as Router } from 'react-router-dom'
import ThemeContainer from './components/Containers/ThemeContainer'
import ModalsContainer from './components/Containers/ModalsContainer'
import './services/socket/Ws'

ReactDOM.render(
  <React.StrictMode>
    <ThemeContainer>
      <ModalsContainer />
      <Router>
        <Root />
      </Router>
    </ThemeContainer>
  </React.StrictMode>,
  document.getElementById('root')
)
