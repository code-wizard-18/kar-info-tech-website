import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Services from './pages/Services';
import './App.css';
function App() {
 return (
<div className="app-container">
<Header />
<Routes>
<Route path="/" element={<Home/>} />
{/* <Route path="/services" element={<Services />} /> */}
</Routes>
{/* <Footer /> */}
</div>
 );
}
export default App;