import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import QuickContact from './components/QuickContact.jsx';
import ScrollManager from './components/ScrollManager.jsx';
import HomePage from './pages/HomePage.jsx';
import CourseDetailPage from './pages/CourseDetailPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/khoa-hoc/:slug" element={<CourseDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <QuickContact />
    </>
  );
}
