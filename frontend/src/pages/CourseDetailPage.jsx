import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCourse } from '../data.js';
import Wave from '../components/Wave.jsx';
import Consult from '../components/Consult.jsx';
import CourseHero from '../components/course/CourseHero.jsx';
import ForWho from '../components/course/ForWho.jsx';
import Outcomes from '../components/course/Outcomes.jsx';
import Curriculum from '../components/course/Curriculum.jsx';
import LearningSteps from '../components/course/LearningSteps.jsx';
import Faq from '../components/course/Faq.jsx';
import OtherCourses from '../components/course/OtherCourses.jsx';
import NotFoundPage from './NotFoundPage.jsx';

export default function CourseDetailPage() {
  const { slug } = useParams();
  const course = getCourse(slug);

  useEffect(() => {
    if (course) document.title = `${course.title} – Tin học Thức Nguyễn EDU`;
  }, [course]);

  if (!course) return <NotFoundPage />;

  return (
    <div className={`course-page course-page--${course.tone}`} key={course.slug}>
      <CourseHero course={course} />
      <Wave top="var(--tint)" bottom="var(--white)" />
      <ForWho course={course} />
      <Outcomes course={course} />
      <Wave top="var(--white)" bottom="var(--tint)" />
      <Curriculum course={course} />
      <Wave top="var(--tint)" bottom="var(--white)" />
      <LearningSteps />
      <Faq course={course} />
      <Wave top="var(--white)" bottom="var(--tint)" />
      <Consult no="06" defaultCourse={course.title} />
      <Wave top="var(--tint)" bottom="var(--white)" />
      <OtherCourses current={course} />
    </div>
  );
}
