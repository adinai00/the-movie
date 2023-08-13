import axios from "axios";
import React, { useEffect, useState } from "react";
import { api_key } from "../../ApiKey/ApiKey";
import { Link } from "react-router-dom";

export default function TrendingMovie() {
  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  function getNowPlayingMovies() {
    axios(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=ru-RU&page=1`
    ).then(({ data }) => {
      console.log(data);
      setNowPlaying(data);
    });
  }
  return (
    <div className="play ml-9">
      <h2 className=" text-gray-400 text-2xl m-[100px]">Сейчас смотрять</h2>

      <div className="">
        <div className="   flex  flex-wrap justify-center items-center gap-[50px] ">
          {nowPlaying?.results?.map((movie) => (
            <Link to={`/playing/${movie.id}`}>
              <img
                className="img max-w-[400px] h-[40vh]"
                style={{
                  boxShadow: " 0px 5px 10px 2px white",
                }}
                src={`https://www.themoviedb.org/t/p/original/${movie?.poster_path}`}
                alt=""
              />
              <h2 className=" text-[15px] mt-[30px]  w-[300px]">
                {movie?.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
