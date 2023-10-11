import React, { useState } from "react";
import Head from "next/head";
// import { searchMovies } from "../../utils/utilities";

const Navbar = () => {

  

  // const [searchValue, setSearchValue] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  // const handleInput = (event) => {
  //   setSearchValue(event.target.value);
  // };

  // const handleSearch = async () => {
  //   const results = await searchMovies(searchValue);
  //   setSearchResults(results.results);
  // };



  return (
    <>
      <Head>
        <title>Mooovie</title>
      </Head>
      <div className="bg-gray-800 p-6">
        <nav className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white">
            M<span className="text-blue-400">oo</span>vie
            </h1>
          </div>

          <div className="flex items-center">
            <div className="relative mr-4">
              <input
                // value={searchValue}
                // onChange={handleInput}
                type="text"
                placeholder="Search"
                className="px-4 py-2 rounded-l-lg bg-gray-700 text-white outline-none"
              />
              <button
                // onClick={handleSearch}
                className="px-4 py-2 bg-blue-400 text-white rounded-r-lg mr-64"
              >
                Search
              </button>
            </div>
            <ul className="flex items-center space-x-8 text-white">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">My list</li>
              <button className="px-4 py-2 bg-blue-400 text-white rounded-md cursor-pointer">
               Sign in
              </button>
            </ul>

          </div>
        </nav>
      </div>


      {/* {searchResults.length > 0 && (
        <div className="container mx-auto mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {searchResults.map((movie) => (
              <div
                key={movie.id}
                className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="text-lg font-semibold mt-2 text-red-500">
                  {movie.title}
                </h3>
                <p className="mt-2 text-gray-700">{movie.overview}</p>
              </div>
            ))}
          </div>
        </div>
      )} */}


    </>
  );
};

export default Navbar;
