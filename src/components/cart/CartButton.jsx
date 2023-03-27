import React, { useContext } from "react";
import { BooksContext } from "../../context/BooksContext";
import cartImage from '../../images/cartImage.png';

export const CartButton = () => {
  const {totalQuantity} = useContext(BooksContext);
  return (
    <div id="cartImg">
      <img src={cartImage}  alt="Cart"/>
      <span >{totalQuantity}</span>
    </div>
  );
};
