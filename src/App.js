import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Routes from './routes'

import './App.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <Switch>
          {Routes.map(r => (
            <Route
              path={r.path}
              key={r.path || 'not-found'}
              exact={r.exact}
              render={routeProps => (
                <r.component
                  {...routeProps}
                  metadata={r.metadata}
                />
              )}
            />
          ))}
        </Switch>
      </div>
      <Footer />
    </div>
  )
}

export default App
