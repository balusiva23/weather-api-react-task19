import {React,useState} from 'react'
import Search from './components/Search/Search'
import { BrowserRouter as Router, Switch, Route,Routes } from 'react-router-dom';
import Weather from './components/Weather/Weather';
const App = () => {
  const [city, setCity] = useState('');
  return (
  //  <Search/>
    <Router>
  
      <Routes>
        <Route path="/" element={<Search setCity={setCity} />} />
        <Route path="/weather" element={<Weather city={city} />} />
      </Routes>
  </Router>
  )
}

export default App
