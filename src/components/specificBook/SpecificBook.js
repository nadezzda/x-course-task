import './specificBook.scss';
import React, {useContext, useState} from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { BooksContext } from '../../context/BooksContext';

export default function SpecificBook() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [count, setCount] = useState(1);
  const { getBookById, addToCart, defaultBookImage } = useContext(BooksContext);
  const { id }  = useParams();
  const book = getBookById(Number(id));
  
  const handleAddToCart = () => {
    addToCart(book, count);
  };
  function handleChange(event) {
      const min = 1;
      const max = 42;
      const value = event.target.value;
      if (value > max) {
          event.target.value = max
      } else if (value < min) {
          event.target.value = min
      }
      setCount(event.target.value);
      setTotalPrice((event.target.value) * (book.price));
  }
  if (!book) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bookInfo">
      <Helmet>
        <title>{book.title}</title>
      </Helmet>
      <div className="bookDesc">
        <img src={book.image || defaultBookImage} alt={book.title}/>
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
          <p><input type="number" defaultValue="1" max="42" min="1" onChange={handleChange}/></p>
        </div>
        <div className='row'>
          <p>Total price</p>
          <p>{(totalPrice || book.price).toFixed(2)}$</p>
        </div>
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </div>
  );
}
