import React, {useContext} from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import BookList from './components/bookList/BookList';
import Cart from './components/cart/Cart';
// import Exception404 from './components/routes/Exception404';
import SignIn from './components/signIn/SignIn';
import SpecificBook from './components/specificBook/SpecificBook';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { AuthContext } from './context/AuthContext';

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="App">
        <Header />
        <Routes >
          <Route path='/signin' element={!isAuthenticated ? <SignIn /> : <Navigate to="/booklist" />} />
          <Route path="booklist" element={isAuthenticated ? <BookList /> : <Navigate to="/signin" />}/>
          <Route path='specificbook/:id' element={isAuthenticated ? <SpecificBook /> : <Navigate to="/signin" />} />
          <Route path='cart' element={isAuthenticated ? <Cart /> : <Navigate to="/signin" />} />
          <Route path='*' element={<Navigate to="/signin" />}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
