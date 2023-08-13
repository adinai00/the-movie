import React from "react";

export default function SearchMovie() {
  return (
    <div className=" w-full min-h-screen fixed top-0 left-0  bg-[#1a161f7a] z-50 flex justify-center items-center">
      <div className=" w-[800px] h-[600px] bg-black  ">
        <h2 className=" flex justify-end pr-3 pt-2 text-gray-400">Закрыть</h2>
        <div className=" flex gap-5 p-[20px]">
          <input
            type="search"
            placeholder="Найти фильм, сериал, актера..."
            className=" w-[600px] p-[15px] text-xl  "
            style={{
              border: " 5px solid green",
            }}
          />
          <button className=" py-[15px] px-[35px]  bg-green-600">Найти</button>
        </div>
      </div>
    </div>
  );
}
