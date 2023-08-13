import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomeMovie({ movie }) {
  const navigate = useNavigate();

  function watchMovie() {
    // window.scrollTo(0, 0);
    navigate(`/movie/${movie.id}`);
  }

  return (
    <div className=" flex mb-[50px] mt-[94px]">
      <div
        className=" w-full h-[80vh] bg-red-200 relative rounded-[30px]"
        style={{
          background: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path}) no-repeat center/cover`,
        }}
      >
        <div
          className="absolute w-full h-full bg-red-600 z-0"
          style={{
            background:
              "linear-gradient(90deg, #000 0%, rgba(250, 250, 250, 0.00) 100%)",
          }}
        ></div>
      </div>
      <div className="absolute w-full z-10 flex gap-4 items-center justify-around p-3">
        <div className=" w-[800px]  flex flex-col gap-[80px] justify-center items-center pl-6">
          <h3 className=" text-5xl text-center ">{movie.title}</h3>
          <h3 className=" text-xl text-gray-400">{movie.overview}</h3>
          <div className="btn flex justify-center ">
            <button
              className="border-[2px] border-solid border-white py-[15px] px-[75px] rounded-[30px] text-xl"
              onClick={watchMovie}
            >
              Смотреть
            </button>
          </div>
        </div>
        <div className="  w-[600px] flex justify-center items-center pt-6">
          <img
            className="w-[450px] rounded-[20px]"
            style={{
              boxShadow: " -7px 11px 10px 2px black",
            }}
            src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
