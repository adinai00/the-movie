import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api_key } from "../../ApiKey/ApiKey";

export default function DetailsMovie() {
  const { id } = useParams;
  const [details, setDetails] = useState();

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=ru-Ru&page=1`
    ).then(({ data }) => {
      console.log(data);
      setDetails(data);
    });
  }, [id]);

  return (
    <div className=" flex ]">
      <div
        className=" w-full h-[80vh] bg-red-200 relative rounded-[30px]"
        style={{
          background: `url(https://image.tmdb.org/t/p/original/${details?.backdrop_path}) no-repeat center/cover`,
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
          <h3 className=" text-5xl text-center ">{details?.title}</h3>
          <h3 className=" text-xl text-gray-400">{details?.overview}</h3>
          {/* <div className="btn flex justify-center ">
            <button
              className="border-[2px] border-solid border-white py-[15px] px-[75px] rounded-[30px] text-xl"
              onClick={watchMovie}
            >
              Смотреть
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
