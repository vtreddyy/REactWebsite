import './App.css';
import Header from './components/Title/Header';
import SatsangSchedule from './components/Body/Satsang/SatsangSchedule';
import LocationShowCase from './components/Body/ByLocation/LocationShowCase';
const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <SatsangSchedule/>
        <LocationShowCase/>
      </main>
      <footer>
      </footer>
    </div>
  );
};

export default App;
