import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import About from '../About/About';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import PrivacyPolicy from '../Legal/PrivacyPolicy';
import TermsOfService from '../Legal/TermsOfService';
import { useLayoutEffect } from 'react';

const Wrapper = ({ children, ...props }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/terms-of-service' element={<TermsOfService />} />
        </Routes>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
};

export default RouteSwitch;
