import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import Filter from "../Components/Filters/Filter";
import ProductCard from "../Components/ProductCard/ProductCard";
import Search from "../Components/Search/Search";
import { getProductSuccess } from "../Context/action";
import { StoreContext } from "../Context/StoreContextProvider";
import style from "./Products.module.css";

function Products() {
  const { dispatch } = useContext(StoreContext);
  const { state } = useContext(StoreContext);
  console.log(state);
  const products = state.display;

  function getProducts() {
    fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    )
      .then((res) => res.json())
      .then((data) => dispatch(getProductSuccess(data)))
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Search />
      <div className={style.products}>
        <Filter />
        <div className={style.container}>
          {products.length > 0 &&
            products.map((item) => <ProductCard key={item.id} data={item} />)}
        </div>
      </div>
    </>
  );
}

export default Products;
