/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";


const movieUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=d64b6d90";

function Movies() {
  const [movieData, setMovieData] = useState({});

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchMovieData = async () => {
    const response = await fetch(movieUrl);
    const movieData = await response.json();
    setMovieData(movieData);
  };

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  return (
    <>
      <div className="container">
        <div className="card">
            <img src={movieData.Poster} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">Name: {movieData.Title}</h5>
                <p className="card-text">Director: {movieData.Director}</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default Movies;
