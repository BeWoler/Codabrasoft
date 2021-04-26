import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { configureAnchors } from 'react-scrollable-anchor'
import App from './components/app/App'

const history = createBrowserHistory()

configureAnchors({offset: -100, scrollDuration: 800})

ReactDOM.render((
    <Router history={history}>
        <App />
    </Router>
), document.querySelector('#root')
)

