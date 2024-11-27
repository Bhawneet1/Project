import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Signup from './Components/Signup';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        
      </Routes>
    </>
  );
}

export default App;
