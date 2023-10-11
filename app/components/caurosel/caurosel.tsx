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
