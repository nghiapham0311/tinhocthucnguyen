import { useEffect } from 'react';
import Hero from '../components/Hero.jsx';
import Wave from '../components/Wave.jsx';
import CourseGroups from '../components/CourseGroups.jsx';
import Consult from '../components/Consult.jsx';
import Schedule from '../components/Schedule.jsx';
import Materials from '../components/Materials.jsx';

export default function HomePage() {
  useEffect(() => {
    document.title = 'Tin học Thức Nguyễn EDU';
  }, []);

  return (
    <>
      <Hero />
      <Wave top="var(--tint)" bottom="var(--white)" />
      <CourseGroups />
      <Wave top="var(--white)" bottom="var(--tint)" />
      <Consult no="03" />
      <Wave top="var(--tint)" bottom="var(--white)" />
      <Schedule />
      <Materials />
    </>
  );
}
