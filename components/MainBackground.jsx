import React from "react";

const MainBackground = () => {
  return (
    <div>
      <div className="bg-antiquewhite dark:bg-magicBlack-500 transition duration-300 text-magicBlack-500 dark:text-antiquewhite py-4 md:py-24">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
          <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 w-full  justify-center">
            <div className="h-48 flex flex-wrap content-center ">
              <div>
                <img
                  className=" "
                  src="https://arturia.cz/wp-content/uploads/2019/08/ilust-1.png"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-start sm:p-2 mt-10 z-10 px-6 ">
            <h1 className="text-3xl md:text-5xl  text-poisongreen dark:text-royalblue tracking-loose ">
              Tech-Blog
            </h1>
            <h2 className="text-3xl md:text-5xl mb-2">
              O Hudbě, Front-endu, Grafice a jiném...
            </h2>
            <p className="text-sm md:text-base  mb-4">
              Odložiště různých článků, návodů nebo nápadů, které najdu na internetu, nebo sám napíšu.
            </p>
            <svg
              className="animate-bounce w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBackground;
