import { Route, Routes } from 'react-router-dom';
import ScrollManager from './components/ScrollManager.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import ZaloFloat from './components/ZaloFloat.jsx';
import HomePage from './pages/HomePage.jsx';
import CoursesPage from './pages/CoursesPage.jsx';
import KidsPage from './pages/KidsPage.jsx';
import CertPage from './pages/CertPage.jsx';
import OfficePage from './pages/OfficePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import { ROUTES } from './data.js';

// Mỗi trang tự render SiteHeader (header nằm trong phần hero, mỗi trang một kiểu).
export default function App() {
  return (
    <>
      <ScrollManager />
      <main>
        <Routes>
          <Route path={ROUTES.home} element={<HomePage />} />
          <Route path={ROUTES.courses} element={<CoursesPage />} />
          <Route path={ROUTES.kids} element={<KidsPage />} />
          <Route path={ROUTES.cert} element={<CertPage />} />
          <Route path={ROUTES.office} element={<OfficePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <SiteFooter />
      <ZaloFloat />
    </>
  );
}
