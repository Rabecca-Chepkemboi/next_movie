'use client'
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { NEXT_PUBLIC_IMAGE_BASE_URL } from "@/app/config";

interface Movie {
  id: number;
  title: string;
  genre_ids: number[];
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
}
const Carousels = () => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=8644a1c8f15817cdc93d07d6ccdc34fb")
      .then(res => res.json())
      .then(data => setPopularMovies(data.results))
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <div className="text-white py-2 mt-[-14%] ">
      <div className="w-full">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          showStatus={false}
          className="carousel"
          emulateTouch={true}
          renderIndicator={(clickHandler, isSelected, index, label) => {
            if (isSelected) {
              return (
                <li
                  className="inline-block mx-1 mb-5 w-6 h-6 rounded-full bg-white opacity-75 cursor-pointer"
                  onClick={clickHandler}
                  title={label}
                />
              );
            }
            return (
              <li
                className="inline-block mx-1 mb-5 w-6 h-6 rounded-full bg-white opacity-25 cursor-pointer"
                onClick={clickHandler}
                title={label}
              />
            );
          }}
        >
          {popularMovies.map(movie => (
            <div className="carousel-item" key={movie.id}>
              <div className="relative h-screen">
                <img
                  src={`${NEXT_PUBLIC_IMAGE_BASE_URL}${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full"
                />
                <div className="carousel-overlay absolute left-0 right-0 bottom-0 top-0 flex flex-col justify-end px-4 py-6 bg-black bg-opacity-60">
                  <h2 className="text-2xl font-semibold text-white mb-5">{movie.title}</h2>
                  <p className="text-gray-400 mb-5">{movie.release_date}</p>
                  <p className="mt-2 text-white-200 mb-20">{movie.overview}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default Carousels;
























// import React, { useState } from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// const Carousel = () => {
//   const [currImg, setCurrImg] = useState(0);

//   const goToPreviousImage = () => {
//   };

//   const goToNextImage = () => {
//   };

//   return (
//     <>
//       <div className="carousel mt-10">
//   <div className="carouselInner bg-cover bg-center relative">
//     <div className="left absolute top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={goToPreviousImage}>
//       <IoIosArrowBack className="left-icon text-white" />
//     </div>

//     <div className="center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white grid grid-cols-7 gap-4 mt-8 mb-8">
//       <h1 className="center-h1">Your Movie Title</h1>
//       <div className="center-status">
//         <span>Movie Status</span>
//       </div>

//       <div className="center-rating">
//         <span>Rating: </span>5.0
//       </div>

//       <div className="center-description">
//         <span>Movie description</span>
//       </div>

//       <div className="center-staring">
//         <span>Starring: </span>Actor 1, Actor 2
//       </div>

//       <div className="center-buttons">
//         <button className="watch">Watch Now</button>
//       </div>
//       <div>
//       <button className="favorite">Add To Favorite</button>
//       </div>
//     </div>

//     <div className="right absolute top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={goToNextImage}>
//       <IoIosArrowForward className="right-icon text-white" />
//     </div>
//   </div>
// </div>

//     </>
//   );
// };

// export default Carousel;



// import React, { useState } from "react";
// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";
// import images from "./images"; 

// const Carousel = () => {
//   const [currImg, setCurrImg] = useState(0);

//   const goToPreviousImage = () => {
//     const newCurrImg = (currImg - 1 + images.length) % images.length;
//     setCurrImg(newCurrImg);
//   };

//   const goToNextImage = () => {
//     const newCurrImg = (currImg + 1) % images.length;
//     setCurrImg(newCurrImg);
//   };

//   return (
//     <>
//       <div className="carousel">
//         <div
//           className="carouselInner bg-cover bg-center relative"
//           style={{ backgroundImage: `url(${images[currImg].img})` }}
//         >
//           <div className="left absolute top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={goToPreviousImage}>
//             <IoIosArrowBack className="left-icon text-white" />
//           </div>

//           <div className="center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
//             <p>{images[currImg].title}</p>
//           </div>

//           <div className="right absolute top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={goToNextImage}>
//             <IoIosArrowForward className="right-icon text-white" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Carousel;
