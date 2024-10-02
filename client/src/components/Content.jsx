// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import Textspeech from './Textspeech';
// const ChapterDetail = () => {
//   const { chapterNumber } = useParams();
//   const [slokas, setSlokas] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedLanguage, setSelectedLanguage] = useState('en');

//   useEffect(() => {
//     fetchSlokas();
//   }, [chapterNumber]);

//   const fetchSlokas = async () => {
//     try {
     
//       setTimeout(() => {
//         const chapterSlokas = allSlokas.filter(
//           (sloka) => sloka.chapterNumber === parseInt(chapterNumber)
//         );

//         setSlokas(chapterSlokas);
//         setLoading(false);
//       }, 1000);
//     } catch (error) {
//       setError('Failed to fetch slokas.');
//       setLoading(false);
//     }
//   };

//   // Filter slokas based on selected language
//   const filteredSlokas = slokas.filter(
//     (sloka) => slokas.length > 0 && sloka.language === selectedLanguage
//   );

//   if (loading) {
//     return (
//       <div className="bg-gray-900 min-h-screen flex items-center justify-center text-white">
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="bg-gray-900 min-h-screen flex items-center justify-center text-white">
//         <p>{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-900 min-h-screen p-8 text-white">
//       <h1 className="text-4xl font-bold text-center mb-8">Chapter {chapterNumber} - Slokas</h1>

//       <div className="flex justify-center space-x-4 mb-8">
//         <button
//           className={`px-4 py-2 rounded ${selectedLanguage === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white'}`}
//           onClick={() => setSelectedLanguage('en')}
//         >
//           EN
//         </button>
//         <button
//           className={`px-4 py-2 rounded ${selectedLanguage === 'hi' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white'}`}
//           onClick={() => setSelectedLanguage('hi')}
//         >
//           HI
//         </button>
//         <button
//           className={`px-4 py-2 rounded ${selectedLanguage === 'te' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white'}`}
//           onClick={() => setSelectedLanguage('te')}
//         >
//           TE
//         </button>
//       </div>

//       <div className="space-y-6">
//         {chapterNumber === '1' ? (
//           filteredSlokas.length > 0 ? (
//             filteredSlokas.map((sloka) => (
//               <div key={sloka.slokaNumber} className="bg-gray-800 p-6 rounded-lg shadow-lg">
//                 <h2 className="text-2xl font-bold mb-4">
//                   Sloka {sloka.slokaNumber} - {sloka.speaker}
//                 </h2>
//                 <p className="text-gray-300 mb-4 whitespace-pre-line">{sloka.sloka}</p>
//                 <p className="text-sm text-gray-400 italic">{sloka.meaning}</p>
//                 <Textspeech text={sloka.sloka + sloka.meaning} />
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-400 text-center">No slokas available for this chapter.</p>
//           )
//         ) : (
//           <p className="text-gray-400 text-center">No slokas available for this chapter.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChapterDetail;
// import React from 'react'

// function Content() {
//   return (
//     <div>Content</div>
//   )
// }

// export default Content