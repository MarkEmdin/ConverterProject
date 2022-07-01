import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './components/Header';
import CurrentRate from './Pages/CurrentRate';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CurrentRate" element={<CurrentRate />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
