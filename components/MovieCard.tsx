"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type MovieCardProps = {
  id: string;
  poster_path: string;
  original_title: string;
};

const MovieCard = ({ id, poster_path, original_title }: MovieCardProps) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const detailPath = `/details/${id}`;
    console.log("detailPath : ", detailPath);
    router.replace(detailPath);
    router.refresh();
  };

  return (
    <div
      className="p-2 border-t-[4px] border-red-500 rounded shadow-xl cursor-pointer flex flex-col justify-between items-center"
      onClick={handleClick}
    >
      <Image
        src={"https://image.tmdb.org/t/p/w500" + poster_path}
        alt="movie poster"
        width={150}
        height={300}
      />
      <h2 className="text-lg text-center">{original_title}</h2>
    </div>
  );
};

export default MovieCard;
