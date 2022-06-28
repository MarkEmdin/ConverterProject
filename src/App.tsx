import CurrenciesList from './components/CurrenciesList';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home';
import Header from './Pages/Header';
import CurrentRate from './Pages/CurrentRate';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CurrentRate" element={<CurrentRate />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
