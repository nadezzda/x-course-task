import React, { useContext } from "react";
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import "./cart.scss";
import { BooksContext } from "../../context/BooksContext";
import backImage from '../../images/backImage.png';
import cartImage from '../../images/cartImage.png';
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import { clearCart } from "../../store/cartSlice";


export function Cart() {
  let navigate = useNavigate();
  const {items, totalPrice} = useContext(BooksContext);
  const dispatch = useDispatch();
  const isCartEmpty = items.length < 1;
  const buttonDisabled = isCartEmpty;

  return (
    <div className="Cart">
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <div className="btns">
      <button onClick={() => navigate(-1)} id="back" ><img alt="Go back" src={backImage}/></button>
        <button onClick={() => dispatch(clearCart())} disabled={buttonDisabled} id="clear" >Clear a cart</button>
      </div>
        {(items.length < 1) ? (
          <div>
            <img id="cartImg" src={cartImage} alt="Empty cart"/>
            <p id="empty">Cart is empty...</p>
          </div>
        ):(
          <>
          <div className="row head">
            <p>Title</p>
            <p>Count</p>
            <p>Price</p>
            <p>Total price</p>
            <p>Delete</p>
          </div>
            {items.map((item, index) => (
              <CartItem item={item} key={item.id} index={index}/>
            ))}
            <p id="totalPrice">Total price: {totalPrice.toFixed(2)}$</p>
          </>
        )}
    </div>
  );
}
