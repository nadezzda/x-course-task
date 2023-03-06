import React, { useState, useEffect } from 'react';
import data from '../books.json';

const BooksContext = React.createContext();

function BookProvider(props) {
  const [books, setBooks] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const defaultBookImage = 'https://cdn.icon-icons.com/icons2/1306/PNG/512/book_86162.png';
  const defaultCartImage = "https://cdn.icon-icons.com/icons2/2387/PNG/512/shopping_cart_market_ecommerce_icon_144576.png"; 

  const getBookById = (id) => {
    return books.filter((book) => book.id === id)[0];
  };
  const addToCart = (book, count) => {
    setCartItems([...cartItems, {book, count}]);
  }
  const clearCart = () => {
    setCartItems([]);
  }
  useEffect(() => {
    setBooks(data.books);
  }, []);
  
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <BooksContext.Provider value={{books, getBookById, cartItems, addToCart, clearCart, defaultBookImage, defaultCartImage}} {...props} />
  );
}

export { BooksContext, BookProvider };
