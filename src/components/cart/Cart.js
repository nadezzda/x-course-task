import React, { useContext } from "react";
import { Helmet } from 'react-helmet';
import { BooksContext } from "../../context/BooksContext";
import "./cart.scss";

export default function Cart() {
  const { cartItems, clearCart, defaultCartImage} = useContext(BooksContext);
  const books = cartItems.map((item) => item.book);
  const counts = cartItems.map((item) => item.count);

  const totalPrice = books.reduce(
    (acc, book, index) => acc + book.price * counts[index],
    0
  );
  const isCartEmpty = cartItems.length < 1;
  const buttonDisabled = isCartEmpty;
  return (
    <div className="Cart">
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <button onClick={clearCart} disabled={buttonDisabled}>Clear a cart</button>
        {(cartItems.length < 1) ? (
          <div>
            <img src={defaultCartImage} alt="Empty cart"/>
            <p id="empty">Cart is empty...</p>
          </div>
        ):(
          <>
          <div className="row head">
            <p>Title</p>
            <p>Count</p>
            <p>Price</p>
            <p>Total price</p>
          </div>
            {books.map((book, index) => (
              <div className="row" key={book.id}>
                <p>{book.title.length > 24 ? book.title.slice(0, 24) + "..." : book.title}</p>
                <p>{counts[index]}</p>
                <p>{book.price}$</p>
                <p>{(book.price * counts[index]).toFixed(2)}$</p>
              </div>
            ))}
            <p id="totalPrice">Total price: {totalPrice.toFixed(2)}$</p>
          </>
        )}
    </div>
  );
}
