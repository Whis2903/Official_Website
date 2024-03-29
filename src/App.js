import './css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

import Navbar from './components/navbar/NavbarComponent';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import JoinCommunity from './pages/JoinCommunity';
import Bylaws from './pages/Bylaws';
import About from './pages/About'
import Faq from './pages/Faq'
import Event from './pages/Event';
import Event2 from './pages/Event2';

import {Routes, Route,} from 'react-router-dom';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
function App() {
  return (
    <>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route  exact path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="team" element={<Team/>} />
      <Route path="joincommunity" element={<JoinCommunity/>} />
      <Route path="bylaws" element={<Bylaws/>} />
      <Route path="about" element={<About/>} />
      <Route path="faq" element={<Faq/>} />
      <Route path="event" element={<Event/>} />
      <Route path="event2" element={<Event2/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
