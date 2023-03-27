import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { BookList } from '../components/bookList';
import { Cart } from '../components/cart/Cart';
import { Error } from '../routes';
import { SignIn } from '../components/signIn';
import { SpecificBook } from '../components/specificBook';
import { AuthContext } from '../context/AuthContext';
import { Layout } from './Layout';
import { BookProvider } from '../context/BooksContext';

export function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="App">
        <BookProvider >
          <Routes >
            <Route path='/' element={<Layout />} >
              <Route index element={!isAuthenticated ? <SignIn /> : <Navigate to="/book-list" />} />
              <Route path="book-list" element={isAuthenticated ? <BookList /> : <Navigate to="/" />} />
              <Route path='specific-book/:id' element={isAuthenticated ? <SpecificBook /> : <Navigate to="/" />} />
              <Route path='cart' element={isAuthenticated ? <Cart /> : <Navigate to="/" />} />
              <Route path='*' element={<Error />} />
            </Route>
          </Routes>
        </BookProvider>
    </div>
  );
}
