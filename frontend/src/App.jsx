import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Recommendations from './pages/Recommendations';
import logo from './assets/Digital.png'
import './index.css';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/discover">Discover</Link></li>
                        <li><Link to="/recommendations">Recommendations</Link></li>
                    </ul>
                </nav>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/discover" element={<Discover />} />
                        <Route path="/recommendations" element={<Recommendations />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
