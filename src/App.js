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
import Err from './components/err/Err';
import Blogs from './pages/Blogs'
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
      <Route path="blogs" element={<Blogs/>} />
      <Route path="*" element={<Err />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
