import React from "react";
import { useContext } from "react";
import { GrCart } from "react-icons/gr";
import { StoreContext } from "../../Context/StoreContextProvider";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  const { state } = useContext(StoreContext);
  return (
    <nav className={style.navbar}>
      <div>
        <Link to={"/"}>
        <h1>TeeRex Store</h1>
        </Link>
      </div>
      <div>
        <Link to="/cart">
          <button>
            <span>
              <GrCart /> {state.cart.length}
            </span>
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
