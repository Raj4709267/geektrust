import React from "react";
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContextProvider";
import style from "./Filter.module.css";

function Filter() {
  const { state, dispatch } = useContext(StoreContext);

  function handelFilterByColor(value) {
      const data = state.products.filter((item) => value==""?item:item.color == value);
      dispatch({ type: "ADD_FILTER_DATA", payload: data });
  }

  function handelFilterByGender(value) {
    const data = state.products.filter((item) =>value==""?item: item.gender == value);
    dispatch({ type: "ADD_FILTER_DATA", payload: data });
  }

  function handelFilterByType(value) {
    const data = state.products.filter((item) =>value==""?item: item.type == value);
    dispatch({ type: "ADD_FILTER_DATA", payload: data });
  }

  function handelFilterByPrice(value) {
    if (value == 0) {
      const data = state.products.filter((item) =>value==""?item: item.price <= 250);
      dispatch({ type: "ADD_FILTER_DATA", payload: data });
    } else if (value == 1) {
      const data = state.products.filter((item) =>value==""?item: item.price > 250 && item.price<=450);
      dispatch({ type: "ADD_FILTER_DATA", payload: data });
    }
  }

  return (
    <div className={style.filter}>
      <label for="">Color</label>
      <select
        name=""
        id=""
        onChange={(e) => handelFilterByColor(e.target.value)}
      >
        <option value="">All</option>
        <option value="White">White</option>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
      </select>

      <label for="">Gender</label>
      <select name="" id="" onChange={(e) => handelFilterByGender(e.target.value)}>
        <option value="">All</option>
        <option value="Men">Men</option>
        <option value="Women">Women</option>
      </select>

      <label for="">Price</label>
      <select name="" id="" onChange={(e) => handelFilterByPrice(e.target.value)}>
        <option value="">All</option>
        <option value="0">0-250</option>
        <option value="1">251-450</option>
        <option value="2">450</option>
      </select>

      <label for="">Typs</label>
      <select name="" id="" onChange={(e) => handelFilterByType(e.target.value)}>
        <option value="">All</option>
        <option value="Polo">Polo</option>
        <option value="Hoodie">Hoodie</option>
        <option value="Basic">Basic</option>
      </select>
    </div>
  );
}

export default Filter;
