import { BrowserRouter, Route, Routes } from "react-router";
import React from "react";
import './App.css'
import RootLayout from './layouts/RootLayout'
import Shop from './pages/users/Shop'
import Landing from './pages/users/Landing'
import SingleProduct from './pages/users/SingleProduct'
import About from "./pages/users/About";
import DashboardLayout from "./layouts/DashboardLayout";
import Overview from "./pages/Dashboard/Overview";
import AddProduct from "./pages/Dashboard/AddProduct";
import Products from "./pages/Dashboard/Products";
import Orders from "./pages/Dashboard/Orders";
import Contact from "./pages/users/Contact";
import UpdateProduct from "./pages/Dashboard/UppdateProduct";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Customers from "./pages/Dashboard/Customers";
import Cart from "./pages/users/Cart";
import WishList from "./pages/users/WishList";
import CustomerDashboard from "./pages/users/CustomerDashboard";
import Blog from "./pages/users/Blog";
import Inventory from "./pages/Dashboard/Inventory";
import CashFlow from "./pages/Dashboard/CashFlow";
import Checkout from "./pages/users/Checkout";

function App() {


  return (
    < BrowserRouter>
      < Routes>
        < Route path="/" element={< RootLayout />} >
          < Route index={true} element={< Landing />} />
          < Route path="shop" element={< Shop />} />
          < Route path="singleproduct:id" element={< SingleProduct />} />
          < Route path="about" element={< About />} />
          < Route path="contact" element={< Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/customerdashboard" element={<CustomerDashboard />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />



        <Route path="/dashboard" element={<DashboardLayout />}>
          < Route index={true} element={< Overview />} />
          < Route path="orders" element={<Orders />} />
          < Route path="addproduct" element={< AddProduct />} />
          < Route path="orders" element={<Orders />} />
          < Route path="products" element={< Products />} />
          < Route path="updateproduct" element={< UpdateProduct />} />
          < Route path="customers" element={< Customers />} />
          < Route path="inventory" element={< Inventory />} />
          < Route path="cashflow" element={< CashFlow />} />


        </Route>

      </Routes>

    </BrowserRouter>


  )
}

export default App
