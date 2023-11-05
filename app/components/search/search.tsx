// import React, { useState } from 'react';
// import { NEXT_PUBLIC_IMAGE_BASE_URL } from '@/app/config';
// import { getMovies } from '@/app/utilities/getMovies';



// function SearchBar() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const { movies, selectedMovie, handleSearchChange, handleMovieClick } = getMovies();
//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { value } = event.target;
//     setSearchQuery(value);
//     handleSearchChange({ target: { value } });
//   };
//   return (
//     <div className="p-4 text-white flex">
//       <h1 className="text-4xl text-white ml-[-45%] mt-[1%]">
//         M<span className="text-yellow-500">oo</span>vie
//       </h1>
//       <div className="items-center">
//         <input
//           className="ml-[35%] p-3 border border-gray-300 rounded w-[80vh] text-black"
//           type="text"
//           placeholder="Search for a movie"
//           value={searchQuery}
//           onChange={handleChange}
//         />
//         <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[4%]  text-center">
//           {movies.map((movie: any) => (
//             <li key={movie.id} className="" style={{ cursor: 'pointer' }}>
//               <img
//                 className="w-full h-auto"
//                 src={`${NEXT_PUBLIC_IMAGE_BASE_URL}${movie.poster_path}`}
//                 alt={`${movie.title} Poster`}
//                 onClick={() => handleMovieClick(movie)}
//               />
//             </li>
//           ))}
//         </ul>
//         {selectedMovie && (
//           <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
//             <div className="bg-white p-4 rounded-lg shadow-lg">
//               <div className="flex">
//                 <div className="w-1/3">
//                   <img
//                     src={`${NEXT_PUBLIC_IMAGE_BASE_URL}${selectedMovie.poster_path}`}
//                     alt={`${selectedMovie.title} Poster`}
//                     className="max-w-full h-auto mb-2 rounded-lg"
//                   />
//                 </div>
//                 <div className="w-2/3 pl-4">
//                   <h2 className="text-2xl font-semibold mb-2">{selectedMovie.title}</h2>
//                   <h1 className="text-lg font-semibold mb-2 text-black">Overview:</h1>
//                   <p className="text-sm max-h-28 overflow-y-auto text-black">{selectedMovie.overview}</p>
//                   <h1 className="text-lg font-semibold mb-2 mt-4 text-black">Release Date:</h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
// export default SearchBar;


