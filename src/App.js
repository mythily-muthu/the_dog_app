import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SingleDog from './pages/SingleDog'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/:name' element={<SingleDog />}></Route>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
