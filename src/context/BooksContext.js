import React, { useState, useEffect, createContext } from 'react';
import data from '../books.json';
import { useSelector, useDispatch } from 'react-redux';
import { LocalStorageService } from '../services/localStorage';
import { addToCart, removeFromCart} from '../store/cartSlice';

const BooksContext = createContext();

function BookProvider(props) {
  const dispatch = useDispatch();
  const [books, setBooks] = useState([]);
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  useEffect(() => {
      setBooks(data.books);
    }, []);
  
  const getBookById = (id) => {
    return books.filter((book) => book.id === id)[0];
  };
  const addItem = (id, count) => {
    const bookToAdd = getBookById(id);
    bookToAdd.count = count;
    const item = items.find((el) => el.id === id);
    if (item && item.quantity + Number(count) > 42) {
      alert("You can only add 42 books of the same kind to your cart.");
      return;
    }
    dispatch(addToCart(bookToAdd));
    LocalStorageService.set('cartItems', [...items, bookToAdd]);
  };
  const removeBookFromCart = (id) => {
    dispatch(removeFromCart(id));
  }
  
  return (
    <BooksContext.Provider value={{items, totalPrice, totalQuantity, books, addItem, getBookById, removeBookFromCart}} {...props}/>
  );
}

export { BooksContext, BookProvider };
