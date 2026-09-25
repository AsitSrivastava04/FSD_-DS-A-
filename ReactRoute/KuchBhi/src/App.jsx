import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//Import components
import Home from './Home';
import About from './About';
import Course from './Course';
import Fee from './Fee';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <nav style={{ padding: '10px', background: '#f0f0f0', marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/about" style={{ marginRight: '10px' }}>About us</Link>
          <Link to="/courses" style={{ marginRight: '10px' }}>Courses</Link>
          <Link to="/fees">Fees</Link>
        </nav>

        <Routes>
          {/* Use the imported components directly as React elements */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/fees" element={<Fee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;