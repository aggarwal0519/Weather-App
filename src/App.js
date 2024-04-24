import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import ReactHooks from './pages/ReactHooks';
import { WeatherApp } from './pages/WeatherApp/WeatherApp';


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
        <Route path="/" element={<ReactHooks />} />
        <Route path = "/app" element = {<WeatherApp/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
