'use client'
import React, { useState, useEffect, Fragment } from 'react';
type Genre = {
  id: number;
  name: string;
};
type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
};
const Category = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenre, setSelected] = useState<number | null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [displayedMovie, setDisplayedMovie] = useState<Movie | null>(null);
  useEffect(() => {
    Categorybuttons();
  }, []);
  const Categorybuttons = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=8644a1c8f15817cdc93d07d6ccdc34fb'
      );
      const data = await response.json();
      setGenres(data.genres);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchMoviesByGenre = async (genreId: number) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=8644a1c8f15817cdc93d07d6ccdc34fb&with_genres=${genreId}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="p-4  text-white">
      <div className="flex flex-wrap gap-4 mb-4">
        {genres.map((genre) => (
          <button
            key={genre.id}
            className={`bg-blue-400 hover:bg-yellow-600 rounded-full text-white font-semibold py-2 px-6 ${
              selectedGenre === genre.id ? 'bg-blue-400' : ''
            }`}
            onClick={() => {
              setSelected(genre.id);
              fetchMoviesByGenre(genre.id);
            }}
          >
            {genre.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie.id}>
            <div className="relative group">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`${movie.title} Poster`}
              />
              <div className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-90 bg-black text-white flex justify-center items-center">
                <div className="text-center">
                  <p className="text-xl font-semibold mb-2">{movie.title}</p>
                  <p className="text-lg font-semibold mb-2">Overview:</p>
                  <p className="text-sm max-h-28 overflow-y-auto">{movie.overview}</p>
                  <p className="text-lg font-semibold mb-2 mt-4">Release Date:</p>
                  <p className="text-sm">{movie.release_date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {displayedMovie && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">{displayedMovie.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${displayedMovie.poster_path}`}
              alt={`${displayedMovie.title} Poster`}
              className="max-w-full h-auto mb-2"
            />
            <p className="text-lg font-semibold mb-2">Overview:</p>
            <p className="text-sm max-h-28 overflow-y-auto">{displayedMovie.overview}</p>
            <p className="text-lg font-semibold mb-2 mt-4">Release Date:</p>
            <p className="text-sm">{displayedMovie.release_date}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Category;