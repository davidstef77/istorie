import './App.css';
import './index.css';

import Navbar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFound from './pages/NoTFound';
import StartPage from './pages/StartPage';
import Razboi from './pages/Razboi';
import Romanizarea from './pages/Romanizarea';
import Mostenirea from './pages/Mostenirea';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/razboaiele_daco-romane" element={<Razboi />} />
        <Route path="/romanizarea" element={<Romanizarea/>}/>
        <Route path="/mostenirea" element={<Mostenirea/>}/>
       
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;


