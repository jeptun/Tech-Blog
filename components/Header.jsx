import React, { useState, useEffect } from "react";
import { getCategories } from "../services";
import Link from "next/link";
import useDarkMode from "../hook/useDarkMode";
import { HamburgerMenu } from ".";

const Header = () => {
  const [colorTheme, setTheme] = useDarkMode();

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <header className="bg-antiquewhite dark:bg-magicBlack-500 transition duration-300 text-magicBlack-500 dark:text-antiquewhite">
      <div className=" mx-auto">
        <div className="w-full inline-block ">
          <div className="ml-6 mt-4 md:float-left flex">
            <div className="mx-2">
              <span
                onClick={() => setTheme(colorTheme)}
                className=" w-6 h-6 flex items-center justify-center cursor-pointer shadow rounded-full bg-magicBlack-500 dark:bg-antiquewhite text-antiquewhite dark:text-magicBlack-500 transition duration-300 transform hover:-translate-y-0.5"
              >
                {colorTheme === "light" ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="ml-1 w-5 h-5 transform rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    ></path>
                  </svg>
                )}
              </span>
            </div>
            <Link href="/">
              <span className="cursor-pointer text-xl text-royalblue dark:text-poisongreen font-bold">MOON<sup className="text-royalblue dark:text-poisongreen">²</sup></span>
            </Link>
          </div>
          <div className="hidden md:float-left md:contents">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className="md:float-right text-sm mt-4 align-middle mx-3  font-semibold cursor-pointer hover:text-royalblue dark:hover:text-royalblue transition duration-150 transform hover:-translate-y-0.5">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
