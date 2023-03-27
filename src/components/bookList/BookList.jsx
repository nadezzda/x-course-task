import React, { useState, useContext } from "react";
import { Helmet } from 'react-helmet';
import './bookList.scss';
import { BooksContext } from "../../context/BooksContext";
import { ListItem } from "./";

export function BookList() {
    const { books } = useContext(BooksContext);
    const [nameFilter, setNameFilter] = useState("");
    const [priceFilter, setPriceFilter] = useState("");

    const handleNameFilterChange = (event) => {
        setNameFilter(event.target.value);
    };
    const handlePriceFilterChange = (event) => {
        setPriceFilter(event.target.value);
    };
    const filteredBooks = books
        .filter((book) => book.title.toLowerCase().includes(nameFilter.toLowerCase()));
    const priceFilteredBooks = priceFilter
        ? filteredBooks.filter((book) => {
            switch (priceFilter) {
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
        : filteredBooks;
    const sortedBooks = priceFilteredBooks.sort((a, b) => a.price - b.price);

    return (
        <div className="bookList">
            <Helmet>
                <title>Books catalog</title>
            </Helmet>
            <div className="searchFilter">
                <form onSubmit={(event) => event.preventDefault()}>
                    <input id="searchBook" name="searchBook" type="search" placeholder="Search by book name" value={nameFilter} onChange={handleNameFilterChange} />
                </form>
                <form onSubmit={(event) => event.preventDefault()}>
                    <select className="form-select" aria-label="Default select example" value={priceFilter} onChange={handlePriceFilterChange} >
                        <option value="">All</option>
                        <option value="0-15">0 &lt; price &lt; 15</option>
                        <option value="15-30">15 &lt; price &lt; 30</option>
                        <option value="30+">price &gt; 30</option>
                    </select>
                </form>
            </div>
            <div className="books">
                {sortedBooks.map((book) => (
                    <ListItem book={book} key={book.id} />
                ))}
            </div>
        </div>
    );
}
