import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomeSelector from './pages/HomeSelector';
import IndividualLanding from './pages/IndividualLanding';
import BusinessLanding from './pages/BusinessLanding';
import './index.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeSelector />} />
        <Route path="/individual/*" element={<IndividualLanding />} />
        <Route path="/business/*" element={<BusinessLanding />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);