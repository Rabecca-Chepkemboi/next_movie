import React from "react";
import Image from "next/image";
// import GenreList from "../Genres/page";
// import Getcategory from "../Genres";

const HeroSection = () => {
    return (
        <><><><div className="relative h-[calc(100vh-5rem)]">
            <div className="absolute inset-0 w-160">
                <Image
                    src="/barbie.jpg"
                    layout="fill"
                    quality={100}
                    objectFit="cover"
                    priority={true}
                    alt="" />
            </div>

<div className="absolute inset-0 flex items-center bg-gradient-to-r from-black via-transparent to-transparent">
     <div className="w-full md:w-3/5 ml-8 text-center md:text-left text-white">
        <div>
     <h1 className="text-3xl md:text-6xl font-light leading-tight text-white">
         Malificent:
        <span className="text-blue-400">Mistress</span> of <br />
        <span className="text-blue-400">Evil</span>
     </h1>
                   
         </div>
             <p className="text-lg mt-6 md:mt-10 text-white">
                 <p className="text-lg mt-6 md:mt-10 text-white">
                 The story shows malificent and Aurora as they navigate new changes to their relationships.  <br />
                <p>Including impending nuptials unexpected allies and dark new forces at play</p> <br />
                <p>Starring: Angelica Elle Fanning, Michelle Preiffer Juno Temple</p>

         </p> <br />
         <div className="mt-4 flex space-x-4">
        <button className="bg-blue-400 text-white px-4 py-2 rounded-full hover:bg-blue-400 transition duration-300 ease-in-out">
           Watch Now
        </button>
        <button className="bg-blue-400 text-white px-4 py-2 rounded-full hover:bg-blue-400 transition duration-300 ease-in-out">
           Add To Favorites
        </button>
         </div>
       </p>
     </div>
</div>

 </div></></>
        </>
    );
};

export default HeroSection;