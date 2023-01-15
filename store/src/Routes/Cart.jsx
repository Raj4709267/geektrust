import React from "react";
import { useContext } from "react";
import { StoreContext } from "../Context/StoreContextProvider";
import style from "./Cart.module.css";

function Cart() {
  const { state, dispatch } = useContext(StoreContext);

  const cart = state.cart;

  function handleIncQuan(id) {
    const data = cart.map((item) => {
      if (item.quan == item.quantity && item.id == id) {
        // console.log(item.quanit)
        alert("Max quanity reached");
        return item;
      } else {
        return item.id == id ? { ...item, quan: item.quan + 1 } : item;
      }
    });
    dispatch({ type: "CHANGE_QUANT", payload: data });
  }

  function handleDecQuan(id) {
    const data = cart.map((item) => {
      if (item.quan == 1 && item.id == id) {
        alert("Try to increase quantity");
        return item;
      } else {
        return item.id == id ? { ...item, quan: item.quan - 1 } : item;
      }
    });

    dispatch({ type: "CHANGE_QUANT", payload: data });
  }

  function handleDelete(id) {
    const data = cart.filter((item) => item.id !== id);
    dispatch({ type: "ITEM_DELETE", payload: data });
  }

  return (
    <div className={style.cart}>
      {cart.length > 0 &&
        cart.map((item) => {
          return (
            <div>
              <img src={item.imageURL} alt={item.imageURL} />
              <div className={style.cartName}>
                <h2>{item.name}</h2>
                <h3>Rs. {item.price}</h3>
                <div className={style.quantity}>
                  <button onClick={() => handleDecQuan(item.id)}>-</button>
                  {item.quan}
                  <button onClick={() => handleIncQuan(item.id)}>+</button>
                </div>
              </div>
              <div>
                <button className={style.delete} onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            </div>
          );
        })}

      <div>
        <h1>
          Total Price :-{" "}
          {cart.reduce((result, item) => {
            return result + item.price * item.quan;
          }, 0)}
        </h1>
      </div>
    </div>
  );
}

export default Cart;
