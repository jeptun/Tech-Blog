import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="bg-antiquewhitey dark:bg-magicBlack-600 transition duration-300  shadow rounded p-8 mb-8 pb-12 text-magicBlack-500 dark:text-antiquewhite">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4 border-poisongreen dark:border-royalblue">Kategorie</h3>
        {categories.map((category) =>(
            <Link key={category.slug} href={`/category/${category.slug}`}>
            <span className="cursor-pointer block pb-3 mb-3 text-lg font-bold hover:text-royalblue dark:hover:text-royalblue transition duration-150 transform hover:-translate-y-0.5">
                {category.name}
            </span>
            </Link>
        ))}
    </div>
  );
};

export default Categories;
