import React from "react";
import { Link } from "react-router-dom";
import bookImage from '../../images/bookImage.png';

export function ListItem({book}) {
    return(
    <div className="oneBook" key={book.id}>
        <img src={book.image || bookImage} alt={book.title} />
        <h2>{book.title}</h2>
        <p id="author">{book.author}</p>
        <div className="buy">
            <p>{book.price}$</p>
            <Link id="buyBtn" to={`/specific-book/${book.id}`}>View</Link>
        </div>
    </div>
    );
}