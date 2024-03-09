import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.item);
  //    const cartItems = useSelector((store) => {
  //      return store.cart.item;
  //    });
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-5 p-5">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 mx-auto">
        <button
          className="p-2 m-2 bg-[black] text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>Cart is empty. Add some items to the card</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
