import './App.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import ScrollToTop from "react-scroll-to-top";
import useNavigationEvents from './services/useNavigationEvents';
import { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'
import Admission from './components/Admission/Admission'

function App() {

  const [loading, setLoading] = useState(false);

  const handleNavigationStart = () => {
    setLoading(true);
  };

  const handleNavigationEnd = () => {
    setLoading(false);
  };

  useNavigationEvents(handleNavigationStart, handleNavigationEnd);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/admission' element={<Admission/>}></Route>
      </Routes>
      <Footer/>
      <ScrollToTop smooth className='scrolltop' />
    </>
  )
}

export default App
