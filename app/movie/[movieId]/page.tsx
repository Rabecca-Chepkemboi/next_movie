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
    <div>
        {movieDetail && (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`} alt={movieDetail.title}/>
            <h2>{movieDetail.title}</h2>
            <p>Overview: {movieDetail.overview}</p>
            <p>Release Date: {movieDetail.release_date}</p>
            </div>
            )}
            </div>
    );
}

export default MovieDetail;
