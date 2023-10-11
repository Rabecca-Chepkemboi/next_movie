// 'use client'
// import { useState, useEffect } from "react";
// import { getMovieDetails } from "@/app/utilities/getMovieDetails";

// const MovieDetail = ({ params: { movieId } }: { params: { movieId: number } }) => {
//     const [movieDetail, setMovieDetail] = useState<any>(null);
//     useEffect(() => {
//         (async () => {
//             try {
//                 const movieDetailData = await getMovieDetails(movieId);
//                 setMovieDetail(movieDetailData);
//             } catch (error) {
//                 console.error("Error fetching movie details:", error);
//                 console.log(movieDetail);
//             }
//         })();
//     }, [movieId]);
//     return (
//         <div className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-90 bg-black text-white flex justify-center items-center">
//                 <div className="text-center">
//                   <p className="text-xl font-semibold mb-2">{movieDetail.title}</p>
//                   <p className="text-lg font-semibold mb-2">Overview:</p>
//                   <p className="text-sm max-h-28 overflow-y-auto">{movieDetail.overview}</p>
//                   <p className="text-lg font-semibold mb-2 mt-4">Release Date:</p>
//                   <p className="text-sm">{movieDetail.release_date}</p>
//                 </div>
//               </div>
//     );
// }

// export default MovieDetail;