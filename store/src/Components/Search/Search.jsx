import React, { useContext, useState } from "react";
import { StoreContext } from "../../Context/StoreContextProvider";
import style from "./Search.module.css";

function Search() {
  const { state ,dispatch} = useContext(StoreContext);

  const [query, setQuery] = useState("");

  function handelSearch() {
    const data = state.products;

    const color = data.filter((item) => {
      if (
        query.includes(item.color.toLowerCase()) ||
        query.includes(item.type.toLowerCase()) ||
        query.includes(item.name.toLowerCase())
      ) {
        return item;
      }
    });
    dispatch({ type: "ADD_SEARCHED_DATA", payload: color });
  }

  return (
    <div className={style.search}>
      <div>
        <input
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search by color, types"
          id=""
        />
        <button onClick={handelSearch}>Search</button>
      </div>
    </div>
  );
}

export default Search;
