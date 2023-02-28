import React from 'react';

export default function SpecificBook() {
    return (
        <div className="bookInfo">
          <div className="bookDesc">
          </div>
          <div className="bookGeneralInfo">
            <h2>Title</h2>
            <p>Name Name</p>
            <p>description</p>
          </div>
          <div className="bookPrice">
            <div className='row'>
              <p>Price</p>
              <p>11$</p>
            </div>
            <div className='row'>
              <p>Count</p>
              <p><input type="number" defaultValue="1" max="42" min="1"/></p>
            </div>
            <div className='row'>
              <p>Total price</p>
              <p>11$</p>
            </div>
            <button>Add to cart</button>
          </div>
        </div>
      );
    
}