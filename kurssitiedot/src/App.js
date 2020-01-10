import React from 'react';
import Course from './components/Course'

  const Courses = ( {courses} ) => {
    return (
      courses.map(course => <Course key={course.id} name={course.name} parts={course.parts} />)
    )
  }
  
  const App = ( {courses} ) => {
      return (
        <div>
          <Courses courses={courses} />
        </div>
      )
    }

export default App