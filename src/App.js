import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Title/LoginPage/LoginPage';
import RegisterPage from './components/Title/LoginPage/RegisterPage';
import Dashboard from './components/Title/LoginPage/Dashbord';
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
            <Route path="/login/register" element={<RegisterPage/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
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