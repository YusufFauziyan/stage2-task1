import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import NavbarComp from "./component/NavbarComp"
import MessageBtn from "./component/MessageBtn"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Product from "./pages/Product"
import DetailProduct from "./pages/DetailProduct"
import Profile from "./pages/Profile"
import ChatUser from './pages/ChatUser';
// ADMIN
import NavbarAdmin from './component/NavbarAdmin'
import ChatAdmin from './pages/admin/ChatAdmin';
import CategoryList from './pages/admin/CategoryList';
import ListProduct from './pages/admin/ListProduct';
import EditCategory from './pages/admin/EditCategory';
import EditProduct from './pages/admin/EditProduct';




function App() {
  return (
    <>
      <Router>
        <NavbarAdmin />
      
        <Routes>
          <Route exact path="/" element={<Product />}/>
          <Route exact path="/complain" element={<ChatAdmin />} />
          <Route exact path="/category" element={<CategoryList />} />
          <Route exact path="/product" element={<ListProduct />} />
          <Route exact path="/category/edit-category" element={<EditCategory />} />
          <Route exact path="/product/edit-product" element={<EditProduct />} />
        </Routes>
        </Router>
    </>
  );
}

export default App;
