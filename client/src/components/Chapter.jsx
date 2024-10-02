import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
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
  function Chapter() {
    const navigate = useNavigate();
    const { chapterNumber } = useParams();
    const [data, setData] = useState('');
  
    useEffect(() => {
      async function getData() {
        try {
          const res = await axios.post("http://localhost:4000/quiz-api/hello", chapters[chapterNumber]);
          setData(res.data.message);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      getData();
    }, [chapterNumber]);
  
    if (data === '') return <div className="text-center text-gray-500 py-10">Loading...</div>;
  
    const chapter = chapters[chapterNumber];
  
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{chapter.subjectName}</h1>
          <p className="text-gray-600 mb-4">{chapter.description}</p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-gray-700">
              <strong>Number of Chapters:</strong> {chapter.numberOfChapters}
            </div>
            <div className="text-gray-700">
              <strong>Course Level:</strong> {chapter.courseLevel}
            </div>
            <div className="text-gray-700">
              <strong>Total Lessons:</strong> {chapter.totalLessons}
            </div>
            <div className="text-gray-700">
              <strong>Subject ID:</strong> {chapter.subjectId}
            </div>
          </div>
  
          <div className="mt-6">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition" onClick={()=>navigate('/quiz',{state:{data}})}>
              
              Start Quiz
            </button>
          </div>
  
          <div className="mt-6 bg-gray-100 p-4 rounded-md">
          <div 
            className="prose" 
            dangerouslySetInnerHTML={{ __html: data }}
          />
          </div>
        </div>
      </div>
    );
  }
  
  export default Chapter;