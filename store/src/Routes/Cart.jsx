import React from "react";
import { useContext } from "react";
import { StoreContext } from "../Context/StoreContextProvider";
import style from "./Cart.module.css";

function Cart() {
  const { state, dispatch } = useContext(StoreContext);

  const cart = state.cart;

  function handelIncQuan(id) {
    const data = cart.map((item) =>
      item.id == id ? { ...item, quan: item.quan + 1 } : item
    );
    dispatch({ type: "CHANGE_QUANT", payload: data });
  }

  function handelDecQuan(id) {
    const data = cart.map((item) =>
      item.id == id ? { ...item, quan: item.quan - 1 } : item
    );

    dispatch({ type: "CHANGE_QUANT", payload: data });
  }

  function handelDelete(id){
    const data = cart.filter(item=>item.id!==id)
    dispatch({type:"ITEM_DELETE",payload:data})
  }

  return (
    <div className={style.cart}>
      {cart.length > 0 &&
        cart.map((item) => {
          return (
            <div>
              <img src={item.imageURL} alt={item.imageURL} />
              <div className={style.cartName}>
                <h1>{item.name}</h1>
                <h2>Rs. {item.price}</h2>
              </div>
              <div>
                <button onClick={() => handelDecQuan(item.id)}>-</button>
                {item.quan}
                <button onClick={() => handelIncQuan(item.id)}>+</button>
              </div>
              <div>
                <button onClick={()=>handelDelete(item.id)}>Delete</button>
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
