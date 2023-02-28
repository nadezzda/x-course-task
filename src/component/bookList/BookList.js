import React from "react";

export default function BookList() {
    return(
        <div className="bookList">
            <div className="searchFilter">
                <form >
                    <input id="searchBook" name="searchBook" type="search" placeholder="Search by book name"/>
                    <select className="form-select" aria-label="Default select example">
                        <option value="">All</option>
                        <option value="0-15">0 &lt; price &lt; 15</option>
                        <option value="15-30">15 &lt; price &lt; 30</option>
                        <option value="30+">price &gt; 30</option>
                    </select>
                </form>
            </div>
            <div className="books">
                <div className="oneBook">
                    <h2>Title</h2>
                    <p id="author">Name Surename</p>
                    <div className="buy">
                        <p>10$</p>
                        <a id="buyBtn">View</a>
                    </div>
                </div>
            </div>
        </div> 
    );
}