import React, { useEffect, useState } from 'react';
import { fetchCourses } from '../../api/api';
import MainContent from '../../components/MainContent';
import Card from '../../components/Card';

function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCoursesData = async () => {
      try {
        const coursesData = await fetchCourses();
        setCourses(coursesData);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCoursesData();
  }, []);

  return (
    <MainContent>
      <h1>Lista de Cursos</h1>
      <ul>
        {courses.map((course) => (
          <Card
            key={course.id}
            title={course.title}
            description={course.description}
            author={course.instructor}
          />
        ))}
      </ul>
    </MainContent>
  );
}

export default Home;
