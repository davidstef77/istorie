import './App.css';
import './index.css';

import Navbar from './components/NavBar';
import { Routes, Route } from 'react-router-dom'; // Ensure you're using Routes instead of Route directly
import HomePage from './pages/HomePage';
import NotFound from './pages/NoTFound';
import StartPage from './pages/StartPage';
import Razboi from './pages/Razboi';
import Romanizarea from './pages/Romanizarea';
import Mostenirea from './pages/Mostenirea';
import LogIn from './components/authentification/LogIn';
import { Cont } from './pages/Cont';
import TestRomanziarea from './pages/TestRomanizarea';
import TestRazboi from './pages/TestRazboi';
import TestMostenirea from './pages/TestMostenirea';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/razboaiele_daco-romane" element={<Razboi />} />
        <Route path="/romanizarea" element={<Romanizarea />} />
        <Route path="/mostenirea" element={<Mostenirea />} />
        <Route path='/start' element={<StartPage/>}/>
        <Route path='/login' element={<LogIn />} />
        <Route path='/cont' element={<Cont />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/test-romanizarea' element={<TestRomanziarea/>}/>
        <Route path='/test-razboi' element={<TestRazboi/>}/>
        <Route path='/test-mostenirea' element={<TestMostenirea/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
