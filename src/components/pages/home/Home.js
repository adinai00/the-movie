import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { api_key } from "../../../ApiKey/ApiKey";
import HomeMovie from "./HomeMovie";
import { useParams } from "react-router-dom";
// import SearchMovie from "../../searchMovie/SearchMovie";

export default function Home() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  function getMovies() {
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=ru-Ru&page=1"`
    ).then(({ data }) => {
      setMovie(data.results);
      console.log(data.results);
    });
  }
  return (
    <div>
      <div className="">
        {movie.map((movie) => (
          <HomeMovie movie={movie} />
        ))}
      </div>{" "}
    </div>
  );
}
