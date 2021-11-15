import React from "react";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (

    <div className=" flex  rounded-sm p-0 lg:p-0  mb-2 mt-10  bg-antiquewhite dark:bg-magicBlack-500 transition duration-300 text-magicBlack-500 dark:text-antiquewhite">
      <div className="relative overflow-hidden w-2/4 shadow-md rounded-l-sm">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top absolute h-96 md:h-full w-full object-cover"
        />
      </div>
      <div className=" w-2/4 pt-2">
      <div className="block lg:flex text-center items-center  mb-2 w-full border-b border-gray-300 dark:border-gray-700">
      <h1 className=" my-2 mx-2 cursor-pointer text-xl font-bold text-poisongreen dark:text-royalblue ">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
        <div className="items-center mb-4 lg:mb-0 w-full lg:w-auto mx-1">
          <img
            alt={post.author.name}
            height="30px"
            width="30px"
            className=" inline align-middle rounded-full mb-2"
            src={post.author.photo.url}
           />
           <p className="inline align-middle mx-1 text-sm font-normal">{post.author.name}</p>
           <div className=" mx-1 inline align-middle text-sm font-normal ">{post.nationality}</div>
        </div>
        <span className="text-sm font-normal">
          {moment(post.createdAt).format('MMM DD, YYYY')}
        </span>
     
      </div>
      <p className="text-left text-base font-normal px-4 mb-2">{post.excerpt}</p>
      <div className="text-right mr-2">
        <Link href={`/post/${post.slug}`}> 
          <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-poisongreen dark:bg-royalblue text-sm font-medium rounded-full text-antiquewhite my-4  px-3 py-2 cursor-pointer">Pokračovat</span>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default PostCard;
