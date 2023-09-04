import React from 'react'
import Search from './components/Search/Search'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const App = () => {
  return (
  //  <Search/>
    <Router>

      <Route path="/" exact component={Search} />

   
  </Router>
  )
}

export default App
