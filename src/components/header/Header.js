import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchMovie from "../searchMovie/SearchMovie";
// import { FaSistrix } from "react-icons/fa";

export default function Header() {
  const [isSearch, setSearch] = useState(false);

  return (
    <div className=" fixed top-0 z-30 w-full mt-[60] flex  justify-between p-[30px] border-[2px] border-solid border-green-600 bg-[#000000b4] pl-[250px] pr-[250px]">
      <div>
        <h1>logo</h1>
      </div>
      <div className=" flex justify-center">
        <div className=" cursor-pointer">
          <nav className=" text-white flex  gap-[60px] justify-center text-xl">
            <Link to="/">
              <h2 className="title">
                <span>Главная</span>
              </h2>
            </Link>
            <Link to="/trending">
              <h2 className="title">
                <span>Популярные фильмы</span>
              </h2>
            </Link>
            <Link to="/topRated">
              <h2 className="title">
                <span>Сериалы</span>
              </h2>
            </Link>
            <Link to="/actor">
              <h2 className="title">
                <span>Актеры</span>
              </h2>
            </Link>
          </nav>
        </div>
      </div>
      <div className=" text-[24px]">icon{/* <FaSistrix /> */}</div>

      {/* {isSearch && <SearchMovie />} */}
    </div>
  );
}
