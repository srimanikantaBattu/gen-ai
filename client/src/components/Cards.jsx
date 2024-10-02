import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const chapters = [
  {
    subjectId: 101,
    subjectName: "Engineering Mathematics",
    numberOfChapters: 5,
    description: "This subject covers topics like calculus, linear algebra, differential equations, and probability that are foundational to all engineering disciplines.",
    courseLevel: "Intermediate",
    totalLessons: 233
  },
  {
    subjectId: 102,
    subjectName: "Engineering Physics",
    numberOfChapters: 4,
    description: "An application-oriented subject that connects the principles of physics to practical engineering problems in fields like electromagnetism, mechanics, and optics.",
    courseLevel: "Advanced",
    totalLessons: 191
  },
  {
    subjectId: 103,
    subjectName: "Engineering Chemistry",
    numberOfChapters: 3,
    description: "Focuses on chemical processes and their applications in engineering, including topics such as material science, thermodynamics, and electrochemistry.",
    courseLevel: "Beginner",
    totalLessons: 90
  },
  {
    subjectId: 104,
    subjectName: "Engineering Mechanics",
    numberOfChapters: 4,
    description: "Covers the fundamental concepts of forces, equilibrium, kinematics, and dynamics, and their applications to engineering structures.",
    courseLevel: "Intermediate",
    totalLessons: 140
  },
  {
    subjectId: 105,
    subjectName: "Basic Electrical Engineering",
    numberOfChapters: 6,
    description: "Introduces the basics of electrical circuits, electromagnetism, electrical machines, and power systems for engineering applications.",
    courseLevel: "Beginner",
    totalLessons: 110
  },
  {
    subjectId: 106,
    subjectName: "Basic Electronics Engineering",
    numberOfChapters: 5,
    description: "Covers the fundamentals of electronics, including semiconductor devices, digital electronics, and analog circuits.",
    courseLevel: "Beginner",
    totalLessons: 98
  },
  {
    subjectId: 107,
    subjectName: "Engineering Graphics",
    numberOfChapters: 4,
    description: "Focuses on technical drawing, CAD, and 3D modeling used in the visualization and design of engineering structures.",
    courseLevel: "Intermediate",
    totalLessons: 75
  },
  {
    subjectId: 108,
    subjectName: "Engineering Thermodynamics",
    numberOfChapters: 6,
    description: "Examines the principles of energy, heat transfer, and thermodynamic cycles with applications to engines and energy systems.",
    courseLevel: "Advanced",
    totalLessons: 125
  },
  {
    subjectId: 109,
    subjectName: "Computer Programming",
    numberOfChapters: 5,
    description: "Introduces programming concepts using languages like C or Python, focusing on problem-solving, algorithms, and data structures.",
    courseLevel: "Beginner",
    totalLessons: 88
  },
  {
    subjectId: 110,
    subjectName: "Data Structures and Algorithms",
    numberOfChapters: 6,
    description: "Covers efficient ways of organizing, processing, and storing data, with a focus on algorithms and computational complexity.",
    courseLevel: "Intermediate",
    totalLessons: 132
  }
];

const SubjectChapters = () => {
  return (
    <div className="bg-gray-900 min-h-screen p-8 text-white">
      <h1 className="text-4xl font-bold text-center mb-8">Subject Chapters</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {chapters.map((chapter,index) => (
          <Link
            key={chapter.subjectId}
            to={`${index}`} // Define the link target route
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold mb-4">{chapter.subjectName}</h2>
            <p className="text-sm text-gray-400 mb-2">
              <span className="font-semibold">Course Level:</span> {chapter.courseLevel}
            </p>
            <p className="text-sm text-gray-300 mb-4">{chapter.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubjectChapters;
