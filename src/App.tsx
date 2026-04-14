import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Commissions from './pages/Commissions';
import About from './pages/About';
import HireMe from './pages/HireMe'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/commissions" element={<Commissions />} />
      <Route path="/contact" element={<HireMe />} />
      <Route path="*" element={<h3>404:Page not found UwU</h3>} />
    </Routes>
  );
}

export default App
