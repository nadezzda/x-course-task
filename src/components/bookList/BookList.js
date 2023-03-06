import React, {useState, useContext} from "react";
import { Helmet } from 'react-helmet';
import './bookList.scss';
import { BooksContext } from "../../context/BooksContext";
import { Link } from "react-router-dom";


export default function BookList() {
    const {books, defaultBookImage} = useContext(BooksContext);
    const [filterName, setFilterName] = useState("");
    const [filterPrice, setFilterPrice] = useState("");

    const handleNameChange = (event) => {
        setFilterName(event.target.value);
    };
    const handlePriceChange = (event) => {
        setFilterPrice(event.target.value);
    };
    const filteredBooks = books
    .filter((book) => book.title.toLowerCase().includes(filterName.toLowerCase()))
    .filter((book) => {
        switch (filterPrice) {
        case "0-15":
            return book.price > 0 && book.price < 15;
        case "15-30":
            return book.price > 15 && book.price < 30;
        case "30+":
            return book.price > 30;
        default:
            return true;
        }
    })
    .sort((a, b) => a.price - b.price);

    return(
        <div className="bookList">
            <Helmet>
                <title>Books catalog</title>
            </Helmet>
            <div className="searchFilter">
                <form onSubmit={(event) => event.preventDefault()}>
                    <input id="searchBook" name="searchBook" type="search" placeholder="Search by book name" value={filterName} onChange={handleNameChange} />
                    <select className="form-select" aria-label="Default select example" value={filterPrice} onChange={handlePriceChange} >
                        <option value="">All</option>
                        <option value="0-15">0 &lt; price &lt; 15</option>
                        <option value="15-30">15 &lt; price &lt; 30</option>
                        <option value="30+">price &gt; 30</option>
                    </select>
                </form>
            </div>
            <div className="books">
                {filteredBooks.map((book) => (
                <div className="oneBook" key={book.id}>
                    <img src={book.image || defaultBookImage} alt={book.title} />
                    <h2>{book.title.length > 24 ? book.title.slice(0, 24) + "..." : book.title}</h2>
                    <p id="author">{book.author}</p>
                    <div className="buy">
                        <p>{book.price}$</p>
                        <Link id="buyBtn" to={`/specificbook/${book.id}`}>View</Link>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}