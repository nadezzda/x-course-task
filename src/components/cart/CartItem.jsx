import {BooksContext}  from '../../context/BooksContext';
import React, { useContext } from 'react';
import deleteImage from '../../images/deleteImage.png';

const CartItem = (props) => {
  const {removeBookFromCart} = useContext(BooksContext);

  const { id, title, quantity, price } = props.item;

  const handleRemove = () => {
    removeBookFromCart(id);
  }
  return (
    <div className="row" key={id}>
      <p>{title}</p>
      <p>{quantity}</p>
      <p>{price}$</p>
      <p>{(price * quantity).toFixed(2)}$</p>
      <img src={deleteImage} alt="Delete" onClick={handleRemove}/>
    </div>
  );
};

export default CartItem;