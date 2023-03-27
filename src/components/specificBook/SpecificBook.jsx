import React, {useContext, useState} from 'react';
import { Helmet } from 'react-helmet';
import { useParams, useNavigate } from 'react-router-dom';
import {BooksContext}  from '../../context/BooksContext';
import './specificBook.scss';
import bookImage from '../../images/bookImage.png';
import backImage from '../../images/backImage.png';

export function SpecificBook() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [count, setCount] = useState(1);
  const {getBookById, addItem} = useContext(BooksContext);
  const { id }  = useParams();
  const book = getBookById(Number(id));
  let navigate = useNavigate();

  const handleAddToCart = () => {
    addItem(book.id, count);
  };
  function increment() {
    const newValue = count + 1;
    if (newValue <= 42) {
      setCount(newValue);
      setTotalPrice(newValue * book.price);
    }
  }

  function decrement() {
    const newValue = count - 1;
    if (newValue >= 1) {
      setCount(newValue);
      setTotalPrice(newValue * book.price);
    }
  }
  function handleChange(event) {
    const min = 1;
    const max = 42;
    const value = parseInt(event.target.value);
    if (isNaN(value) || value < min) {
      value = min;
    } else if (value > max) {
      value = max;
    }
    setCount(value);
    setTotalPrice(value * book.price);
  }
  if (!book) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bookInfo">
      <Helmet>
        <title>{book.title}</title>
      </Helmet>
      <button onClick={() => navigate(-1)} id="back" ><img alt="Go back" src={backImage}/></button>
      <div className="bookDesc">
        <img src={book.image || bookImage} alt={book.title}/>
      </div>
      <div className="bookGeneralInfo">
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <p>{book.description}</p>
      </div>
      <div className="bookPrice">
        <div className='row'>
          <p>Price</p>
          <p>{book.price}$</p>
        </div>
        <div className='row'>
          <p>Count</p>
          <p id="counter">
            <button data-testid="decrementButton"  type="button" onClick={decrement}>-</button>
            <input value={count} onChange={handleChange}/>
            <button data-testid="incrementButton"  type="button" onClick={increment}>+</button>
          </p>
        </div>
        <div className='row'>
          <p>Total price</p>
          <p>{(totalPrice || book.price).toFixed(2)}$</p>
        </div>
        <button id="add" onClick={handleAddToCart}>Add</button>
      </div>
    </div>
  );
}
