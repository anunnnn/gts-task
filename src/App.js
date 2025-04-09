import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import CartPageApp from './components/CartPageApp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<CartPageApp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


{/* // import CartPage from './CartPage';

// <Route path="/cart" element={<CartPage />} /> */}