import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavbarComp from "./component/NavbarComp"

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
import PrivateRoute from './component/PrivateRoute'
import PageNotFound from './component/404/PageNotFound';

const App = () => {
  return (
    <>
    <Router>
    <Routes >
      <Route exact path="/login" element={<Login />}/>
      <Route exact path="/register" element={<Register />}/>
      <Route exact path='/*' element={<PageNotFound />}/>
          <Route element={<PrivateRoute/>}>
            <Route exact path="/" element={<Product />}/>
            <Route exact path="/detail-product/:id" element={<DetailProduct />}/>
            <Route exact path="/complain-user" element={<ChatUser />} />
            <Route exact path="/complain" element={<ChatAdmin />} />
            <Route exact path="/category" element={<CategoryList />} />
            <Route exact path="/product" element={<ListProduct />} />
            <Route exact path="/category/edit-category" element={<EditCategory />} />
            <Route exact path="/product/edit-product" element={<EditProduct />} />
            <Route exact path="/profile" element={<Profile />} />
        </Route>

      </Routes>
    </Router>
    </>
  );
}

export default App;