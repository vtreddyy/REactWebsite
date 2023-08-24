import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Title/LoginPage/LoginPage';
import HomePage from './components/Title/LoginPage/HomePage';
import Header from './components/Title/Header';
import SatsangSchedule from './components/Body/Satsang/SatsangSchedule';
import LocationShowCase from './components/Body/ByLocation/LocationShowCase';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/Home" element={<HomePage />} />
            <Route path="/" element={
              <>
                <SatsangSchedule />
                <LocationShowCase />
              </>
            } />
          </Routes>
        </main>
        <footer>
        </footer>
      </div>
    </Router>
  );
};

export default App;