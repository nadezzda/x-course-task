import React from "react";
import "./cart.scss";

export default function Cart() {
    if (null) {
        return (
            <div className="Cart">
            <button>Clear a cart</button>
                <div>
                    <p id="empty">Cart is empty...</p>
                </div>
            </div>
        );
    } else {
        <div className="Cart">
            <div className="row head">
                <p>Title</p>
                <p>Count</p>
                <p>Price</p>
                <p>Total price</p>
              </div>
                  <div className="row">
                    <p>Title</p>
                    <p>1</p>
                    <p>11$</p>
                    <p>11$</p>
                  </div>
                <p id="totalPrice">Total price: 11$</p>
        </div>
    }
      
}

