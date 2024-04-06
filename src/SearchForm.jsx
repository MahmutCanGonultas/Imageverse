import { useState, useRef } from "react";
import { useGlobalContext } from "./context";
const SearchForm = () => {
  const { isDarkTheme, setText } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    console.log(searchValue);
    setText(searchValue);
  };

  return (
    <section className="flex flex-col justify-center">
      <h1 className="text-center text-4xl md:text-5xl lg:text-6xl uppercase font-medium text-emerald-600 ">
        Imageverse
      </h1>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex justify-center mt-5"
      >
        <input
          type="text"
          name="search"
          placeholder="space"
          className={`${
            isDarkTheme ? "text-black" : "bg-neutral-700 text-white"
          } w-4/6 px-3 text-lg `}
        />
        <button
          type="submit"
          className=" px-2 bg-emerald-600 hover:bg-emerald-500 text-white"
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
