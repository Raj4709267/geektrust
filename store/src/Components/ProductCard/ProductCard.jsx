import React from "react";
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContextProvider";

function ProductCard({ data }) {
  const { state, dispatch } = useContext(StoreContext);

  function handelAddtoCart() {
    const cart = state.cart;
    const isPresent = cart.filter((item) => item.id == data.id);
    if (isPresent.length == 0) {
      const product = state.products.filter((item) => item.id == data.id);
      let cartData = product[0];
      console.log(cartData);
      cartData = { ...cartData, quan: 1 };
      dispatch({ type: "ADD_TO_CART", payload: [cartData] });
      alert("Product added to cart");
    } else {
      alert("Product already in Cart");
    }
  }

  return (
    <div>
      <img src={data.imageURL} alt={data.imageURL} />
      <div>
        <h3>Rs. {data.price}</h3>
        <button onClick={handelAddtoCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
