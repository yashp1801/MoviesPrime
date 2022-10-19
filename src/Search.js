import React from "react";
import { useGlobalContext } from "./Context";
import "./Search.scss";

const Search = () => {
  const { query, setQuery, isError } = useGlobalContext();

  return (
    <section className="searchbar">
      <div className="searchbar__container">
        <h1>MoviesPrime 📽️</h1>
        <form action="#" onSubmit={(e) => e.preventDefault}>
          <input
            type="text"
            placeholder="enter movie name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div >
      <div className="searchbar_error">
        <p>{isError.show && isError.msg}</p>
      </div>
    </section>
  );
};

export default Search;
