'use client'
import { useState, useEffect } from "react";
import { getMovieDetails } from "@/app/utilities/getMovieDetails";

const MovieDetail = ({ params: { movieId } }: { params: { movieId: number } }) => {
    const [movieDetail, setMovieDetail] = useState<any>(null);
    useEffect(() => {
        (async () => {
            try {
                const movieDetailData = await getMovieDetails(movieId);
                setMovieDetail(movieDetailData);
            } catch (error) {
                console.error("Error fetching movie details:", error);
                console.log(movieDetail);
            }
        })();
    }, [movieId]);
    return (
        <div className="flex justify-center items-center h-screen">
        {movieDetail && (
          <div className="text-center">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
              alt={movieDetail.title}
              className="mx-auto"
            />
            <h2 className="text-2xl font-bold mt-4">{movieDetail.title}</h2>
            <p className="mt-2">Overview: {movieDetail.overview}</p>
            <p className="mt-2 font-bold">Release Date: {movieDetail.release_date}</p>
          </div>
        )}
      </div>
    );
}

export default MovieDetail;
