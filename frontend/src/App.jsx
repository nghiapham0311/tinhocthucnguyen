import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Wave from './components/Wave.jsx';
import CourseGroups from './components/CourseGroups.jsx';
import Consult from './components/Consult.jsx';
import Schedule from './components/Schedule.jsx';
import Materials from './components/Materials.jsx';
import Footer from './components/Footer.jsx';
import QuickContact from './components/QuickContact.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Wave top="var(--tint)" bottom="var(--white)" />
        <CourseGroups />
        <Wave top="var(--white)" bottom="var(--tint)" />
        <Consult />
        <Wave top="var(--tint)" bottom="var(--white)" />
        <Schedule />
        <Materials />
      </main>
      <Footer />
      <QuickContact />
    </>
  );
}
