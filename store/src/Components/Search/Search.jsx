import React from "react";
import style from "./Search.module.css";

function Search() {
  return (
    <div className={style.search}>
      <input type="text" placeholder="Search by color, types" id="" />
      <h4>Search</h4>
    </div>
  );
}

export default Search;
