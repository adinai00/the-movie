import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api_key } from "../../ApiKey/ApiKey";

export default function Series() {
  // const { id } = useParams();
  const [series, setSeries] = useState([]);

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`
    ).then(({ data }) => {
      console.log(data);
      setSeries(data);
    }, []);
  });

  return (
    <div className=" mt-[150px]">
      <div>
        <h2 className=" text-4xl text-center mb-7">Наслаждайтесь сериалами</h2>
      </div>
      <div>
        {series?.results?.map((series) => (
          <Link to={`/series/${series.id}`}>
            <img
              className=" w-[400px] h-[600px]"
              src={`https://www.themoviedb.org/t/p/original/${series?.poster_path}`}
              alt=""
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
