import React from "react";
import Image  from 'next/image'

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded bg-antiquewhitey dark:bg-magicBlack-600 text-magicBlack-500 dark:text-antiquewhitey  transition duration-300 shadow-md dark:bg-opacity-10 bg-opacity-80 ">
      <div className=" absolute left-0 right-0 -top-14 ">
        <Image
          alt={author.name}
          unoptimized
          height="100px"
          width="100px"
          className="align-middle rounded-full bg-antiquewhitey dark:bg-magicBlack-600  transition duration-300 shadow-md  "
          src={author.photo.url}
        />
      </div>
      <h3 className=" my-4 text-xl font-bold ">{author.name}</h3>
        <p className=" text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
